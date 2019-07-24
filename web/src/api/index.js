import config from '../config';

export const url = path => `${config.API_HOST}${path}`;

export const api = (path, options) => fetch(url(path), options)
	.then((resp) => {
		if (!resp.ok) throw new Error('Oopsie!');
		return resp.json();
	});
