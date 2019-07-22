import React, { useState, useEffect } from 'react';

import ClockPresentation from './Clock';

const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',');

const Clock = () => {
	const [now, setDate] = useState(new Date());

	useEffect(() => {
		setTimeout(() => {
			setDate(new Date());
		}, 1000);
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
		/>
	);
}

export default Clock;
