import React from 'react';
import { InputAdornment, TextField, Typography, FormControlLabel, Checkbox } from '@material-ui/core';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import SystemsHealthWidget from '../../widgets/SystemHealth';
import { RowDark } from '../common/Row';

const CpuWidgetSetting = () => (
	<WidgetPreviewSetting
		PreviewWidget={SystemsHealthWidget}
		previewProps={{ cpu: '20%', ramUsagePer: '30%', temp: '60' }}
	>
		<RowDark>
			<FormControlLabel
				label="Enabled"
				control={<Checkbox />}
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
				Base font size for all your widget. This can be overriden by each widget.
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
				Base font size for all your widget. This can be overriden by each widget.
			</div>
		</RowDark>
	</WidgetPreviewSetting>
);

CpuWidgetSetting.propTypes = {
};

export default CpuWidgetSetting;
