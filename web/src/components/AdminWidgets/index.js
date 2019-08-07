import React from 'react';

import CpuWidgetSetting from './CpuWidgetSetting';
import ClockWidgetSetting from './ClockWidgetSetting';
import WeatherWidgetSetting from './WeatherWidgetSetting';
import WidgetSaveControll from '../common/WidgetSaveControll';
import Title from '../common/Title';

const AdminWidgets = () => (
	<div>
		<Title>Widgets</Title>
		<CpuWidgetSetting />
		<ClockWidgetSetting />
		<WeatherWidgetSetting />
		<WidgetSaveControll />
	</div>
);

AdminWidgets.propTypes = {
};

export default AdminWidgets;
