import React from 'react';
import { InputAdornment, TextField, Typography, FormControlLabel, Checkbox } from '@material-ui/core';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import ClockHealthWidget from '../../widgets/Clock';
import { RowDark } from '../common/Row';

const CpuWidgetSetting = () => (
	<WidgetPreviewSetting
		PreviewWidget={ClockHealthWidget}
		previewProps={{}}
	>
		<RowDark>
			<FormControlLabel
				label="Enabled"
				control={<Checkbox checked />}
			/>
		</RowDark>

		<RowDark>
			<Typography>Base font size</Typography>
			<TextField
				type="number"
				InputLabelProps={{ shrink: true }}
				InputProps={{
					endAdornment: <InputAdornment position="end">px</InputAdornment>
				}}
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
			/>
			<div className="info spaced">
				This will override global setting.
			</div>
		</RowDark>
	</WidgetPreviewSetting>
);

CpuWidgetSetting.propTypes = {
};

export default CpuWidgetSetting;
