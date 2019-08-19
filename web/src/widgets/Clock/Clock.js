import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { getTransition } from '../../utils/widgets';

const transition = getTransition();

const useClasses = makeStyles({
	container: ({ baseFontSize }) => ({
		transition,
		flexDirection: 'column',
		fontSize: baseFontSize,
	}),
	sec: {
		color: '#999',
	},
	date: {
		fontSize: '0.6em',
		lineHeight: '0.6em',
		color: '#ccc',
	},
	dateDay: {
		color: '#f77',
	},
	time: {
		fontFamily: '"Courier New", Courier, monospace'
	},
});

const Clock = ({ day, month, year, hour, min, sec, styles }) => {
	const classes = useClasses(styles);

	return (
		<div className={classes.container}>
			<div>
				<div className={classes.date}>
					<span className={classes.dateDay}>{day}</span>
					<span>&nbsp;</span>
					<span>{month}</span>
					<span>&nbsp;</span>
					<span>20{year}</span>
				</div>
				<div>
					<span>{hour}</span>
					<span>:</span>
					<span>{min}</span>
					<span>&nbsp;</span>
					<span className={classes.sec}>{sec}</span>
				</div>
			</div>
		</div>
	);
}

Clock.propTypes = {
	day: PropTypes.string.isRequired,
	month: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	hour: PropTypes.string.isRequired,
	min: PropTypes.string.isRequired,
	sec: PropTypes.string.isRequired,
};

export default Clock;
