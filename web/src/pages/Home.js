import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import SystemHealthWidget from '../widgets/SystemHealth';
import Clock from '../widgets/Clock';
import Weather from '../widgets/Weather';
import WidgetTabs from '../widgets/WigetTabs';

const useClasses = makeStyles(({ baseFontSize }) => ({
	'@global': {
		'html, body': {
			fontSize: baseFontSize,
		},
	},
	container: {
		display: 'flex',
		height: '100%',
	},
	content: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		fontSize: '6em',

		'& > div': {
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	tabs: {
		width: 50,
		background: '#444',
	},
}));

const MAX_TAB = 2;
const useTabManager = () => {
	let timer = null;
	const [currentTab, setTab] = useState(0);

	let showNextTab;

	// useEffect(() => {
	showNextTab = () => {
		if (currentTab === MAX_TAB) {
			setTab(0);
		} else {
			setTab(currentTab + 1);
		}
	};
	// });

	const autoTimeoutShowNext = () => {
		clearTimeout(timer);
		timer = setTimeout(showNextTab, 5000 * 1000);
	};

	autoTimeoutShowNext();

	return [currentTab, autoTimeoutShowNext];
};

const App = () => {
	const [currentTab] = useTabManager();
	const classes = useClasses({ baseFontSize: 96 }); //theme === null ? 1 : theme.baseFontSize

  return (
		<div className={classes.container}>
			<div className={classes.content}>
				{currentTab === 0 && <SystemHealthWidget />}
				{currentTab === 1 && <Clock />}
				{currentTab === 2 && <Weather />}
			</div>
			<WidgetTabs tabIndex={currentTab} />
		</div>
  );
}

export default App;
