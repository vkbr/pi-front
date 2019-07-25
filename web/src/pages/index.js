import React, { PureComponent } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Home from './Home';
import Admin from './Admin';
import createStore from '../store/createStore';
import { fetchSettings } from '../store/admin';
import { registerStore } from '../utils';

const withClasses = withStyles({
	'@global': {
		'html, body, #root' : {
			height: '100%',
		},
		a: {
			color: '#f77',
			fontWeight: 'bold',
			textDecoration: 'none',

			'&:hover': {
				color: '#e66',
			},
		},
	},
});

const store = createStore();

registerStore(store);

class Routes extends PureComponent {
	componentDidMount() {
		store.dispatch(fetchSettings());
	}

	render() {
		return (
			<ReduxProvider store={store}>
				<Router>
					<Route path="/" exact component={Home}  />
					<Route path="/admin" component={Admin} />
				</Router>
			</ReduxProvider>
		);
	}
}

export default withClasses(Routes);
