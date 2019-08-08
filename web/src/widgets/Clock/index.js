import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ClockPresentation from './Clock';
import { getSetting } from '../../store/admin';

const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

let timer;
const getBaseFont = getSetting('w.clock.styles.baseFontSize');

const Clock = () => {
	const baseFontSize = useSelector(getBaseFont, shallowEqual);
	const [now, setDate] = useState(new Date());

	useEffect(() => {
		timer = setTimeout(() => {
			setDate(new Date());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const hour = now.getHours().toString().padStart(2, '0');
	const min = now.getMinutes().toString().padStart(2, '0');
	const sec = now.getSeconds().toString().padStart(2, '0');

	const day = now.getDate().toString().padStart(2, '0');
	const mon = now.getMonth();
	const year = now.getFullYear().toString().substr(2);
	
	return (
		<ClockPresentation
			day={day}
			month={months[mon]}
			year={year}
			hour={hour}
			min={min}
			sec={sec}
			styles={{ baseFontSize }}
		/>
	);
}

export default Clock;
