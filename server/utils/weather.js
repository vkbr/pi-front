const axios = require('axios').default;
const { readSettingsFile } = require('./settings');

const getWeartherApiKey = () => readSettingsFile()
	.then(buffer => buffer instanceof Buffer ? JSON.parse(buffer.toString()) : {})
	.then((settings) => {
		if (settings && settings['w.weather.apiKey'] !== undefined) {
			getAppId = () => Promise.resolve(settings['w.weather.apiKey']);

			return getAppId();
		} else {
			setTimeout(getAppId, 30000);
		}
	});

let getAppId = getWeartherApiKey;

let axiosForecast = (APPID) => {
	const forecast = axios.create({
		baseURL: `http://api.openweathermap.org/data/2.5/forecast?id=2673722&APPID=${APPID}&units=metric`,
	});

	axiosForecast = () => forecast;

	return forecast;
}

let axiosToday = (APPID) => {
	const today = axios.create({
		baseURL: `http://api.openweathermap.org/data/2.5/weather?id=2673722&APPID=${APPID}&units=metric`,
	});

	axiosToday = () => today;

	return today;
}

const REFRESH_TIME_NOR = 1800000; // 30 min => ms
const REFRESH_TIME_ERR = 60000; // 1 min => ms

let weatherInfo = {};

const getIconUrl = code => `http://openweathermap.org/img/wn/${code}@2x.png`;

const matchDDMMYY = (d1, d2) => d1.getDate() === d2.getDate()
	&& d1.getMonth() === d2.getMonth()
	&& d1.getFullYear() === d2.getFullYear();

async function updateWeatherInfo() {
	const APPID = await getAppId();

	Promise.all([axiosForecast(APPID).get(''), axiosToday(APPID).get('')])
		.then(([forecast, today]) => {
			const data = weatherInfo;

			if (today.status === 200) {
				const todayResponse = today.data;

				data.today = {
					temp: Math.round(todayResponse.main.temp),
					tempMin: Math.round(todayResponse.main.temp_min),
					tempMax: Math.round(todayResponse.main.temp_max),
					iconUrl: todayResponse.weather.length
						? getIconUrl(todayResponse.weather[0].icon)
						: null,
				};
			}

			if (forecast.status === 200) {
				const tomorrowsDt = new Date(Date.now() + 86400000);
				const tomorrowsBeforeOffice = new Date(tomorrowsDt.getTime());
				tomorrowsBeforeOffice.setHours(9, 30, 0, 0);
				const tomorrowsBeforeOfficeTime = tomorrowsBeforeOffice.getTime() / 1000;

				let tempTotal = 0;
				let tempTotalCount = 0;
				let tempMin = null;
				let tempMax = null;
				let iconUrl = null;

				const tomorrows = forecast.data.list
					.filter(entry => matchDDMMYY(tomorrowsDt, new Date(entry.dt * 1000)))
					.forEach((entry) => {
						tempTotal += entry.main.temp;
						tempTotalCount++;

						if (tempMax === null || tempMax < entry.main.temp_max) {
							tempMax = entry.main.temp_max;
						}
						if (tempMin === null || tempMin > entry.main.temp_max) {
							tempMin = entry.main.temp_max;
						}

						if (entry.dt < tomorrowsBeforeOffice && entry.weather.length) {
							iconUrl = getIconUrl(entry.weather[0].icon);
						}
					});

				data['+1'] = {
					temp: Math.round(tempTotal / tempTotalCount, 0),
					tempMin: Math.round(tempMin),
					tempMax: Math.round(tempMax),
					iconUrl,
				};
			}

			setTimeout(updateWeatherInfo, REFRESH_TIME_NOR);
		})
		.catch(err => {
			console.log(err);
			setTimeout(updateWeatherInfo, REFRESH_TIME_ERR);
		});
}

updateWeatherInfo();

module.exports.getWeatherInfo = () => weatherInfo;
