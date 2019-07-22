import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useClasses = makeStyles({
	container: {
		flexDirection: 'column',
	},
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

const Clock = ({ day, month, year, hour, min, sec }) => {
	const classes = useClasses({});

	return (
		<div className={classes.container}>
			<div>
				<div className={classes.date}>
					<span className={classes.dateDay}>{day}</span>
					<span>&nbsp;</span>
					<span>{month}</span>
					<span>&nbsp;</span>
					<span>'{year}</span>
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
	day: PropTypes.number.isRequired,
	month: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	sec: PropTypes.number.isRequired,
};

export default Clock;
