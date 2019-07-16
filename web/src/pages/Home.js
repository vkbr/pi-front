import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import SystemHealthWidget from '../widgets/SystemHealth';
import Clock from '../widgets/Clock';
import WidgetTabs from '../widgets/WigetTabs';

const useClasses = makeStyles(() => ({
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

const MAX_TAB = 1;
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
		timer = setTimeout(showNextTab, 5000);
	};

	autoTimeoutShowNext();

	return [currentTab, autoTimeoutShowNext];
};

const App = () => {
	const classes = useClasses({});
	const [currentTab, resetAutoShowNextTab] = useTabManager();
	console.log({ currentTab });
	
  return (
    <div className={classes.container}>
      <div className={classes.content}>
				{currentTab === 0 && <SystemHealthWidget resetTimer={resetAutoShowNextTab} />}
				{currentTab === 1 && <Clock resetTimer={resetAutoShowNextTab} />}
			</div>
			<WidgetTabs tabIndex={currentTab} />
    </div>
  );
}

export default App;
