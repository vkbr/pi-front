import React from 'react';
import { FormControlLabel, Checkbox, TextField, Typography, InputAdornment } from '@material-ui/core';

import Row from '../common/Row';
import { useAdminCheckboxController, useAdminTextController } from '../../utils/admin';
import WidgetSaveControll from '../common/WidgetSaveControll';
import Title from '../common/Title';

const AdminHome = () => {
	const isEnabledController = useAdminCheckboxController('isEnabled', true);
	const baseFontSizeController = useAdminTextController('styles.baseFontSize');
	const screenTimeController = useAdminTextController('screenTime');
	
	return (
		<div>
			<Title>Settings</Title>
			<Row>
				<div className="info">
					Settings are saved at <code>~/.pifront</code>
				</div>
			</Row>

			<Row>
				<FormControlLabel
					label="Enable config"
					control={<Checkbox checked {...isEnabledController} />}
				/>
				<div className="info">
					If disabled, default configs will be used.
				</div>
			</Row>

			<Row>
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
					Base font size for all your widget. This can be overriden by each widget.
				</div>
			</Row>

			<Row>
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
					Widget change time.
				</div>
			</Row>

			<WidgetSaveControll />
		</div>
	);
};

export default AdminHome;
