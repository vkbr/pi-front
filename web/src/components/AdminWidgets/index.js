import React from 'react';

import CpuWidgetSetting from './CpuWidgetSetting';
import ClockWidgetSetting from './ClockWidgetSetting';

const AdminWidgets = () => (
	<div>
		<h1>Widgets</h1>
		<CpuWidgetSetting />
		<ClockWidgetSetting />
	</div>
);

AdminWidgets.propTypes = {
};

export default AdminWidgets;
