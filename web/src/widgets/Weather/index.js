import React, { PureComponent } from 'react';

import WeatherPresemt from './Weather';

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

		return (
			<WeatherPresemt
				weatherToday={weather.today}
				weatherTomorrow={weather['+1']}
			/>
		);
	}
}

Weather.propTypes = {
};

export default Weather;
