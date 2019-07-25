import React from 'react';

import CpuWidgetSetting from './CpuWidgetSetting';
import ClockWidgetSetting from './ClockWidgetSetting';
import WeatherWidgetSetting from './WeatherWidgetSetting';
import WidgetSaveControll from './WidgetSaveControll';

const AdminWidgets = () => (
	<div>
		<h1>Widgets</h1>
		<CpuWidgetSetting />
		<ClockWidgetSetting />
		<WeatherWidgetSetting />
		<WidgetSaveControll />
	</div>
);

AdminWidgets.propTypes = {
};

export default AdminWidgets;
