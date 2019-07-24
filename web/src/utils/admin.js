import { useState, useEffect } from 'react';

import { dispatchToStore, getState, subscribeToStore } from '.';
import { getSetting, updateValue } from '../store/admin';

const createAdminInputController = (valueKey, valueExtractor) => (settingKey) => {
	const [value, setValue] = useState(getSetting(settingKey, getState()));

	useEffect(() => {
		const unsubscribe = subscribeToStore(() => {
			const nextValue = getSetting(settingKey, getState());
			if (value !== nextValue) setValue(value);
		});

		return () => unsubscribe();
	});

	return {
		[valueKey]: value,
		onChange: e => dispatchToStore(updateValue(settingKey, valueExtractor(e))),
	};
};

export const useAdminTextController = createAdminInputController('value', e => e.target.value);

export const useAdminCheckboxController = createAdminInputController('checked', e => e.target.checked);
