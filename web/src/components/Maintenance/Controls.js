import React from 'react';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';

import Row from '../common/Row';

const Controls = () => (
	<div>
		<Row>
			{/* <FormControlLabel
				label="Start at startup"
				control={<Checkbox />}
			/> */}
			<Button color="primary">Enable</Button>
			<div className="info">Start the server and app when the system starts.</div>
		</Row>

		<Row>
			<Button color="primary">Update the system</Button>
			<div className="info">Check for update, apply and restart.</div>
		</Row>
	</div>
);

export default Controls;
