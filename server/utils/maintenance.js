const { spawn } = require('child_process');
const Stream = require('stream');
const path = require('path');

class AdminStream extends Stream.Duplex {
	readArr = [];

	constructor(options) {
		super(options);

		this.emit('readable');
	}

	_read(size){
	}
	_write(chunk, enc, cb) {
		this.push(chunk.toString());
		cb();
	}
	
	writeNl(data) {
		this.write(data);
		this.write('\n');
	}
}

function spawnPromise(stream, cmd, args, options) {
	const proc = spawn(cmd, args, options);
	stream && proc.stdout.on('data', (data) => {
		console.log('[INFO]', data.toString());
		stream.write(data.toString());
	});
	stream && proc.stderr.on('data', (data) => {
		console.log('[ERR]', data.toString());
		stream.write(data.toString());
	});
	stream && proc.on('message', (data) => stream.write(data.toString()))

	return new Promise((resolve) => {
		stream ? proc.on('close', () => resolve(proc)) : resolve(proc);
	});
}

async function update(stream, root) {
	stream.writeNl('+++++DIR git pull');
	stream.writeNl(__dirname);
	stream.writeNl(root);
	stream.writeNl('-----DIR');

	await spawnPromise(stream, 'git', ['pull']);
	return;
}

async function restartBg(stream, root, fastly) {
	stream.writeNl('Restart command received');
	const task = new Promise((resolve) => {
		stream.writeNl('Restarting in 1s');

		setTimeout(async () => {
			console.log('[WARNING] Closeing running server');
			fastly.close(() => {
				// stream.writeNl('Successfully closed');
				console.log('[WARNING] Exiting');
				spawnPromise(null, 'node', [path.resolve(root, 'server')], { detached: true, cwd: root })
					.then(proc => {
						proc.unref();
						process.exit(0);
					});
			});
			resolve();
		}, 1000);

	});

	return task;
}

async function buildWeb(stream, root) {
	stream.writeNl('+++++DIR yarn build');
	stream.writeNl(__dirname);
	stream.writeNl(root);
	stream.writeNl(`WEB: ${root}/web...`);
	stream.writeNl('-----DIR');

	await spawnPromise(stream, 'yarn', ['build'], { cwd: `${root}/web` });
	return;
}

const taskQueue = async (stream, fastly) => {
	const root = path.resolve(__dirname, './../..');
	
	await update(stream, root);
	await buildWeb(stream, root);
	await restartBg(stream, root, fastly);

	stream.write('Ending');
	stream.emit('end');
	stream.emit('close');
	stream.end();
};

module.exports.updateAndRestart = (fastly) => {
	const stream = new AdminStream();

	taskQueue(stream, fastly);

	return stream;
};