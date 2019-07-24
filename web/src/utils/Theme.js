import React from 'react';

import adminDefaultConfigs from '../config/defaultSettings.json';

const { Provider, Consumer } = React.createContext(adminDefaultConfigs);

const withTheme = Component => props => (
	<Consumer>
		{theme => <Component {...props} theme={theme} />}
	</Consumer>
);

const AppThemeProvider = ({ theme, children }) => (
	<Provider value={theme}>
		{children}
	</Provider>
);

export { AppThemeProvider, withTheme };
