const isDev = process.env.NODE_ENV !== 'production';

const config = {
	API_HOST: isDev ? 'http://localhost:3444/' : '/',
};

export default config;