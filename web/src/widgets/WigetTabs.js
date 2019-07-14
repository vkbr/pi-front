import React from 'react';
import MemoryIcon from '@material-ui/icons/Memory';
import TimerIcon from '@material-ui/icons/AccessTime';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useClasses = makeStyles({
	container: {
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		padding: '0 5px',
		backgroundColor: '#333',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridGap: 10,
		height: 'fit-content',

		'& > svg': {
			color: '#aaa',
			transition: 'color 0.5s ease-out',

			'&.active-red': {
				color: '#f77',
			},
			'&.active-blue': {
				color: '#77f',
			},
		},
	},
});

const WidgetTabs = ({ tabIndex }) => {
	const classes = useClasses({});

	return (
		<div className={classes.container}>
			<div className={classes.grid}>
				<MemoryIcon className={tabIndex === 0 ? 'active-red' : ''} />
				<TimerIcon className={tabIndex === 1 ? 'active-blue' : ''} />
			</div>
		</div>
	);
}

WidgetTabs.propTypes = {
	tabIndex: PropTypes.number.isRequired,
};

export default WidgetTabs;
