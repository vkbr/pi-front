const fs = require('fs');
const path = require('path');
const fastifyCors = require('fastify-cors');
const fastifyStatic = require('fastify-static');
const fastly = require('fastify')({
	logger: false,
});

fastly.register(fastifyCors);

fastly.register(fastifyStatic, {
	root: path.resolve('../web/build')
});

const { getCPUTemp } = require('./utils/linux');
const { getWeatherInfo } = require('./utils/weather');

fastly.get('/data/system', (req, reply) => {
	getCPUTemp(data => reply.type('application/json').send(data));
});

fastly.get('/data/weather', (req, reply) => {
	reply.type('application/json').send(getWeatherInfo());
});

fastly.get('*', (req, reply) => {
	reply.type('text/html');
	fs.readFile(path.resolve('../web/build/index.html'), (err, data) => {
		reply.send(data.toString());
	});
});

fastly.listen(3444, '0.0.0.0', (err, addr) => console.log(err ? `Error: ${err}` : `listening at ${addr}`))
