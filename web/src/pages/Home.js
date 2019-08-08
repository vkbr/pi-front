import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import SystemHealthWidget from '../widgets/SystemHealth';
import Clock from '../widgets/Clock';
import Weather from '../widgets/Weather';
import WidgetTabs from '../widgets/WigetTabs';
import { getSetting } from '../store/admin';
import { startSettingsIntervalSync, clearSettingsIntervalSync } from '../utils/widgets';

const useClasses = makeStyles({
	container: ({ baseFontSize }) => ({
		display: 'flex',
		height: '100%',
		fontSize: baseFontSize,
	}),
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
});

const MAX_TAB = 2;
const useTabManager = () => {
	let timer = null;
	const [currentTab, setTab] = useState(0);

	const setTimer = () => {
		timer = setTimeout(showNextTab, 5000 * 1000);
		return timer;
	};

	let showNextTab = () => {
		setTab((currentTab + 1) % MAX_TAB);

		setTimer();
	};

	useEffect(() => {
		setTimer();
	}, []);

	const autoTimeoutShowNext = () => {
		clearTimeout(timer);
		setTimer();
	};

	return [currentTab, autoTimeoutShowNext];
};

const getFontSize = getSetting('styles.baseFontSize');

const App = () => {
	const [currentTab] = useTabManager();
	const baseFontSize = useSelector(getFontSize, shallowEqual);
	const classes = useClasses({ baseFontSize }); //theme === null ? 1 : theme.baseFontSize

	useEffect(() => {
		startSettingsIntervalSync();

		return clearSettingsIntervalSync;
	}, []);

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
