const fs = require('fs');
const path = require('path');
const fastifyCors = require('fastify-cors');
const fastifyStatic = require('fastify-static');
const fastify = require('fastify')({
	logger: false,
	ignoreTrailingSlash: true,
});

fastify.register(fastifyCors);

fastify.register(fastifyStatic, {
	root: path.resolve('../web/build')
});

const { getCPUTemp } = require('./utils/linux');
const { updateAndRestart } = require('./utils/maintenance');
const { readSettingsFile, writeSettingToFile } = require('./utils/settings');
const { getWeatherInfo } = require('./utils/weather');

fastify.get('/health', (req, reply) => reply.send('ok'));

fastify.get('/data/system', (req, reply) => {
	getCPUTemp(data => reply.type('application/json').send(data));
});

fastify.get('/data/weather', (req, reply) => {
	reply.type('application/json').send(getWeatherInfo());
});

fastify.get('/api/admin/update-app', (req, reply) => {
	const stream = updateAndRestart(fastify);

	reply.type('text/plain').send(stream);
})

fastify.get('/api/settings-data', (req, reply) => {
	readSettingsFile()
		.then(data => reply.type('application/json').send(data));
});

fastify.post('/api/write-settings', (req, reply) => {
	writeSettingToFile(req.body)
		.catch(console.error)
		.then(() => reply.send({ isError: false }));
});

const serverSite = (req, reply) => {
	reply.type('text/html');
	fs.readFile(path.resolve('../web/build/index.html'), (err, data) => {
		reply.send(data.toString());
	});
};

fastify.get('/admin', serverSite);
fastify.get('/', serverSite);
// fastify.route({
// 	url: '/*',
// 	method: 'GET',
// 	handler: serverSite,
// });

fastify.listen(3444, '0.0.0.0', (err, addr) => console.log(err ? `Error: ${err}` : `listening at ${addr}`))
