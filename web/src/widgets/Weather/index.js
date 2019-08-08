import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import WeatherPresemt from './Weather';
import { getSetting } from '../../store/admin';

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
		const { weather } = this.state;
		const { baseFontSize } = this.props;

		return (
			<WeatherPresemt
				weatherToday={weather.today}
				weatherTomorrow={weather['+1']}
				styles={{ baseFontSize }}
			/>
		);
	}
}

const getBaseFont = getSetting('w.system.styles.baseFontSize');

export default connect(state => ({
	baseFontSize: getBaseFont(state),
}))(Weather);
