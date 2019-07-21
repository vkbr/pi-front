import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';

const wrapStyles = withStyles({
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

let weatherData = {
	today: {
		temp: 0,
		tempMin: 0,
		tempMax: 0,
		iconUrl: null,
	},
	'+1': {
		temp: 0,
		tempMin: 0,
		tempMax: 0,
		iconUrl: null,
	},
};

class Weather extends PureComponent {
	state = {
		weather: weatherData,
	};
	componentDidMount() {
		fetch('http://localhost:3444/data/weather')
			.then(resp => resp.json())
			.then((data) => {
				weatherData = data;
				this.setState({ weather: weatherData });
			})
	}
	render() {
		const { classes } = this.props;
		const { weather } = this.state;

		return (
			<div className={classes.container}>
				<div className={classes.weather}>
					<div className={classes.iconContainer}>
						<img src={weather.today.iconUrl} alt="" />
					</div>
					<div className={classes.temp}>
							<div>
								{weather.today.tempMin}
							</div>
							<div className="main">{weather.today.temp}</div>
							<div>
								{weather.today.tempMax}
							</div>
					</div>
				</div>
				<div className={classes.weather}>
					<div className={classes.iconContainer}>
						<img src={weather['+1'].iconUrl} alt="" />
					</div>
					<div className={classes.temp}>
						<div>{weather['+1'].tempMin}</div>
						<div className="main">{weather['+1'].temp}</div>
						<div>{weather['+1'].tempMax}</div>
					</div>
				</div>
			</div>
		);
	}
}

Weather.propTypes = {
};

export default wrapStyles(Weather);
