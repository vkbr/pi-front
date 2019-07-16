import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Home from './Home';
import Admin from './Admin';

const useClasses = makeStyles(() => ({
	'@global': {
		'html, body, #root' : {
			height: '100%',
		},
	},
}));

const Routes = () => {
	useClasses({});

	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/admin" exact component={Admin} />
		</Router>
	);
}

export default Routes;
