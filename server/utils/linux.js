const { spawn } = require('child_process');

module.exports.getCPUTemp = (cb) => {
	const temp = spawn('cat', ['/sys/class/thermal/thermal_zone0/temp']);
	let sent = false;

	temp.stdout.on('data', (data) => {
		cb((data/1000).toFixed(2));
	});
	temp.stdout.on('end', () => {
		if (!sent) {
			cb(0);
		}
		temp.kill();
	});
};