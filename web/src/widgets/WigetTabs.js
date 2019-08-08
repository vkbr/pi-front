import React from 'react';
import MemoryIcon from '@material-ui/icons/Memory';
import TimerIcon from '@material-ui/icons/AccessTime';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import { makeStyles } from '@material-ui/styles';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getSetting } from '../store/admin';

const useClasses = makeStyles({
	container: {
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		padding: '0 5px',
		backgroundColor: '#333',
	},
	grid: ({ iconSize }) => ({
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridGap: 15,
		height: 'fit-content',

		'& > svg': {
			color: '#aaa',
			transition: 'color 0.4s ease-out',
			fontSize: iconSize,

			'&.active-red': {
				color: '#f77',
			},
			'&.active-blue': {
				color: '#77f',
			},
			'&.active-green': {
				color: '#7f7',
			},
		},
	}),
});

const getFontSize = getSetting('styles.iconSize');

const WidgetTabs = ({ tabIndex }) => {
	const iconSize = useSelector(getFontSize, shallowEqual);
	const classes = useClasses({ iconSize });

	return (
		<div className={classes.container}>
			<div className={classes.grid}>
				<MemoryIcon className={tabIndex === 0 ? 'active-red' : ''} />
				<TimerIcon className={tabIndex === 1 ? 'active-blue' : ''} />
				<FilterDramaIcon className={tabIndex === 2 ? 'active-green' : ''} />
			</div>
		</div>
	);
}

WidgetTabs.propTypes = {
	tabIndex: PropTypes.number.isRequired,
};

export default WidgetTabs;
