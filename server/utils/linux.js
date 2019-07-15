const { spawn } = require('child_process');
var os = require('os');

const units = ['', 'K', 'M', 'G', 'T'];

function mem() {
	let max = os.totalmem();
	let usage = max - os.freemem();
	let unitUsage = 0;
	let unitMax = 0;
	while(unitUsage < units.length && usage > 1000) {
		usage /= 1024;
		max /= 1024;

		unitUsage++;
		unitMax++
	}

	return {
		max: `${max.toFixed(2)}${units[unitMax]}`,
		usage: `${usage.toFixed(2)}${units[unitUsage]}`,
		usagePer: `${(usage/max).toFixed(2)}%`
	};
}

module.exports.getCPUTemp = (cb) => {
	const temp = spawn('cat', ['/sys/class/thermal/thermal_zone0/temp']);
	let sent = false;

	const sendWithTemprature = temp => {
		const [idleTotal, max] = os.cpus()
			.reduce(([idle, total], { times }) => {
				return [
					idle + times.idle,
					total + Object.values(times).reduce((a,b) => a+b, 0)
				]
			}, [0, 0]);

		cb({
			temp,
			ram: mem(),
			cpu: `${(((max-idleTotal) * 100) / max).toFixed(2)}%`,
		});
	}
	
	temp.stdout.on('data', (data) => {
		sendWithTemprature((data/1000).toFixed(2));
	});
	temp.stdout.on('end', () => {
		if (!sent) {
			sendWithTemprature(0);
		}
		temp.kill();
	});
};