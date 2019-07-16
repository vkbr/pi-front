import React, { useState, useEffect } from 'react';
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
		fontSize: '0.5em',
		color: '#ccc',
	},
	dateDay: {
		color: '#f77',
	},
	time: {
		fontFamily: '"Courier New", Courier, monospace'
	},
});

const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');
console.log(months)

const Clock = () => {
	const [now, setDate] = useState(new Date());
	const classes = useClasses();

	useEffect(() => {
		setTimeout(() => {
			setDate(new Date());
		}, 1000);
	});

	const hour = now.getHours().toString().padStart(2, '0');
	const min = now.getMinutes().toString().padStart(2, '0');
	const sec = now.getSeconds().toString().padStart(2, '0');

	const day = now.getDate().toString().padStart(2, '0');
	const mon = now.getMonth();
	const year = now.getFullYear().toString().substr(2);
	
	return (
		<div className={classes.container}>
			<div>
				<div className={classes.date}>
					<span className={classes.dateDay}>{day}</span>
					<span>&nbsp;</span>
					<span>{months[mon]}</span>
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
	resetTimer: PropTypes.func.isRequired,
};

export default Clock;
