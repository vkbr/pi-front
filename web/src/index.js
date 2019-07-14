import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import App from './pages';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
	},
});

ReactDOM.render((
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>
), document.getElementById('root'));
