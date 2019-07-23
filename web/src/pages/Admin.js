import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { red, yellow } from '@material-ui/core/colors';
import { Route } from 'react-router-dom';

import AdminHome from '../components/AdminHome';
import AdminWidgets from '../components/AdminWidgets';
import AdminNav from '../components/AdminNav';

const theme = createMuiTheme({
	palette: {
		primary: yellow,
		secondary: yellow,
		type: 'dark',
	},
});

const useClasses = makeStyles({
	container: {
		display: 'flex',
		height: '100%',
	},
	title: {
		fontSize: '1.2em',
		paddingLeft: 20,
		color: red.A200,
	},
	nav: {
		width: 200,
		backgroundColor: '#222',
	},
	content: {
		flex: 1,
		padding: 20,
		overflow: 'auto',
	},
});

const Admin = () => {
	const classes = useClasses({});

  return (
    <ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={classes.container}>
				<div className={classes.nav}>
					<h1 className={classes.title}>
						Pi Front
					</h1>
					<AdminNav />
				</div>
				<main className={classes.content}>
					<Route exact path="/admin" component={AdminHome} />
					<Route path="/admin/widgets" component={AdminWidgets} />
				</main>
			</div>
		</ThemeProvider>
  );
}

export default Admin;
