import React from 'react';
import {
	Checkbox,
	FormControlLabel,
	InputAdornment,
	TextField,
	Typography,
} from '@material-ui/core';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import WeatherWidget from '../../widgets/Weather/Weather';
import { RowDark } from '../common/Row';
import { useAdminTextController, useAdminCheckboxController } from '../../utils/admin';

const WeatherWidgetSetting = () => {
	const isEnableController = useAdminCheckboxController('w.weather.isEnable', true);
	const baseFontSizeController = useAdminTextController('w.weather.styles.baseFontSize', 100, Number);
	const screenTimeController = useAdminTextController('w.weather.screenTime', 5000, Number);
	const apiKeyController = useAdminTextController('w.weather.apiKey', '');

	const hasApiKey = apiKeyController.value !== undefined;


	return (
		<WidgetPreviewSetting
			PreviewWidget={WeatherWidget}
			previewProps={{
				weatherToday: {
					temp: 23,
					tempMin: 22,
					tempMax: 26,
					iconUrl: 'http://openweathermap.org/img/wn/01d@2x.png',
				},
				weatherTomorrow: {
					temp: 17,
					tempMin: 21,
					tempMax: 24,
					iconUrl: 'http://openweathermap.org/img/wn/02d@2x.png',
				},
			}}
		>
			<RowDark>
				<FormControlLabel
					label="Enabled"
					control={(
						<Checkbox
							onChange={isEnableController.onChange}
							disabled={!hasApiKey}
							checked={hasApiKey ? apiKeyController.checked : false} />
					)}
				/>
				<div className="info">Requires API key to work</div>
			</RowDark>

			<RowDark>
				<Typography>API key</Typography>
				<TextField
					type="string"
					{...apiKeyController}
				/>
				<div className="info spaced">
					Obtain your API key from openweathermap.org by following steps in link <a href="https://openweathermap.org/guide">here</a>.
				</div>
			</RowDark>

			<RowDark>
				<Typography>Base font size</Typography>
				<TextField
					type="number"
					InputLabelProps={{ shrink: true }}
					InputProps={{
						endAdornment: <InputAdornment position="end">px</InputAdornment>
					}}
					{...baseFontSizeController}
				/>
				<div className="info spaced">
					This will override global setting.
				</div>
			</RowDark>

			<RowDark>
				<Typography>Screen time</Typography>
				<TextField
					type="number"
					InputLabelProps={{ shrink: true }}
					InputProps={{
						endAdornment: <InputAdornment position="end">ms</InputAdornment>
					}}
					{...screenTimeController}
				/>
				<div className="info spaced">
					This will override global setting.
				</div>
			</RowDark>
		</WidgetPreviewSetting>
	);
};

WeatherWidgetSetting.propTypes = {
};

export default WeatherWidgetSetting;
