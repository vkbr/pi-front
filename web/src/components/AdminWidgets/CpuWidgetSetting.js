import React from 'react';

import WidgetPreviewSetting from './WidgetPreviewSetting';
import SystemsHealthWidget from '../../widgets/SystemHealth';

const CpuWidgetSetting = () => (
	<WidgetPreviewSetting
		PreviewWidget={SystemsHealthWidget}
		previewProps={{ cpu: '20%', ramUsagePer: '30%', temp: '60' }}
	>
		Hello
	</WidgetPreviewSetting>
);

CpuWidgetSetting.propTypes = {
};

export default CpuWidgetSetting;
