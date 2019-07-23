import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Home from './Home';
import Admin from './Admin';
import config from '../config';
import { AppThemeProvider } from '../utils/Theme';

const withClasses = withStyles({
	'@global': {
		'html, body, #root' : {
			height: '100%',
		},
	},
});

class Routes extends PureComponent {
	state = {
		theme: null,
	};

	componentDidMount() {
		fetch(`${config.API_HOST}/api/theme-data`)
			.then(resp => resp.json())
			.then(theme => this.setState({ theme }))
			.catch(err => console.error(err));
	}

	render() {
		const { theme } = this.state;

		return (
			<AppThemeProvider theme={theme}>
				<Router>
					<Route path="/" exact component={() => <Home theme={theme} />}  />
					<Route path="/admin" component={Admin} />
				</Router>
			</AppThemeProvider>
		);
	}
}

export default withClasses(Routes);
