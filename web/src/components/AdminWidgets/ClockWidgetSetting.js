import React from 'react';
import { InputAdornment, TextField, Typography, FormControlLabel, Checkbox } from '@material-ui/core';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import ClockHealthWidget from '../../widgets/Clock';
import { RowDark } from '../common/Row';
import { useAdminTextController, useAdminCheckboxController } from '../../utils/admin';

const CpuWidgetSetting = () => {
	const isEnableController = useAdminCheckboxController('w.clock.isEnable', true);
	const baseFontSizeController = useAdminTextController('w.clock.styles.baseFontSize', 100, Number);
	const screenTimeController = useAdminTextController('w.clock.screenTime', 5000, Number);

	return (
		<WidgetPreviewSetting
			PreviewWidget={ClockHealthWidget}
			previewProps={{}}
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

CpuWidgetSetting.propTypes = {
};

export default CpuWidgetSetting;
