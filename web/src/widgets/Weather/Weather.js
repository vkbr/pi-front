import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useClasses = makeStyles({
	container: {
		padding: '0 10px',
	},
	weather: {
		flex: 1,
		minWidth: 0,
		height: '100%',
	},
	iconContainer: {
		height: 100,
		marginBottom: 20,
		justifyContent: 'center',
		textAlign: 'center',
	},
	temp: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '0.9em',

		'& > div:not(.main)': {
			fontSize: '0.5em',
			color: '#999',
		},
		'& > div:first-child': {
			justifyContent: 'flex-end',
			display: 'flex',
			flexDirection: 'column',
		},
	},
});

const Weather = ({ weatherToday, weatherTomorrow }) => {
	const classes = useClasses({});
	
	return (
		<div className={classes.container}>
			<div className={classes.weather}>
				<div className={classes.iconContainer}>
					<img src={weatherToday.iconUrl} alt="" />
				</div>
				<div className={classes.temp}>
						<div>
							{weatherToday.tempMin}
						</div>
						<div className="main">{weatherToday.temp}</div>
						<div>
							{weatherToday.tempMax}
						</div>
				</div>
			</div>
			<div className={classes.weather}>
				<div className={classes.iconContainer}>
					<img src={weatherTomorrow.iconUrl} alt="" />
				</div>
				<div className={classes.temp}>
					<div>{weatherTomorrow.tempMin}</div>
					<div className="main">{weatherTomorrow.temp}</div>
					<div>{weatherTomorrow.tempMax}</div>
				</div>
			</div>
		</div>
	);
};

const weatherProp = PropTypes.shape({
	temp: PropTypes.number.isRequired,
	tempMin: PropTypes.number.isRequired,
	tempMax: PropTypes.number.isRequired,
	iconUrl: PropTypes.string,
});

Weather.propTypes = {
	weatherToday: weatherProp.isRequired,
	weatherTomorrow: weatherProp.isRequired,
};

export default Weather;
