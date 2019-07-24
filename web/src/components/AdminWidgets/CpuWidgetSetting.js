import React from 'react';
import { InputAdornment, TextField, Typography, FormControlLabel, Checkbox } from '@material-ui/core';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import SystemsHealthWidget from '../../widgets/SystemHealth/SystemHealth';
import { RowDark } from '../common/Row';
import { useAdminTextController, useAdminCheckboxController } from '../../utils/admin';

const CpuWidgetSetting = () => {
	const isEnableController = useAdminCheckboxController('w.system.isEnable', true);
	const baseFontSizeController = useAdminTextController('w.system.styles.baseFontSize', 100, Number);
	const screenTimeController = useAdminTextController('w.system.screenTime', 5000, Number);

	return (
		<WidgetPreviewSetting
			PreviewWidget={SystemsHealthWidget}
			previewProps={{ cpu: '20%', ramUsagePer: '30%', temp: '60' }}
		>
			<RowDark>
				<FormControlLabel
					label="Enabled"
					control={<Checkbox {...isEnableController} />}
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

export default CpuWidgetSetting;
