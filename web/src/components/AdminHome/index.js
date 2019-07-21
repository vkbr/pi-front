import React, { useState } from 'react';
import { makeStyles} from '@material-ui/styles';
import { FormControlLabel, Checkbox, TextField } from '@material-ui/core';

import adminDefaultConfig from '../../config/adminDefaultConfigs.json';

const useClasses = makeStyles({
	container: {},
	title: {
		fontSize: '2em',
		marginTop: 0,
		borderBottom: '1px solid #444',
		fontWeight: 'normal',
	},
	row: {
		marginBottom: 20,

		'& .info': {
			color: '#999',
			backgroundColor: '#222',
			padding: 20,
			borderRadius: 3,

			'&.spaced': {
				marginTop: 10,
			},
		},
	},
});

const useAdminForm = () => {
	const [form, setConfig] = useState(adminDefaultConfig);

	const makeControlledCheckbox = fieldName => ({
		checked: form[fieldName],
		onChange: e => setConfig({ ...form, [fieldName]: e.target.checked }),
	});

	const makeControlledTextfield = fieldName => ({
		value: form[fieldName],
		onChange: e => setConfig({ ...form, [fieldName]: e.target.value }),
	});

	return {
		makeControlledCheckbox,
		makeControlledTextfield,
	};
};

const AdminHome = () => {
	const { makeControlledCheckbox, makeControlledTextfield } = useAdminForm({});
	const classes = useClasses({});
	
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>Settings</h1>
			<div className={classes.row}>
				<div className="info">
					Settings are saved at <code>~/.pifrontrc</code>
				</div>
			</div>
			<div className={classes.row}>
				<FormControlLabel
					label="Enable config"
					control={<Checkbox checked {...makeControlledCheckbox('isEnabled')} />}
				/>
				<div className="info">
					If disabled, default configs will be used.
				</div>
			</div>

			<div className={classes.row}>
				<TextField
					label="Screen time"
					type="number"
					InputLabelProps={{ shrink: true }}
					{...makeControlledTextfield('screenTime')}
				/>
				<div className="info spaced">
					Widget change time.
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
