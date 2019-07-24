import { useState, useEffect } from 'react';

import { dispatchToStore, getState, subscribeToStore } from '.';
import { getSetting, updateValue } from '../store/admin';

const createAdminInputController = (valueKey, valueExtractor) => (settingKey, defaultValue, parser = v => v) => {
	const valueFromStore = getSetting(settingKey, getState());
	const [value, setValue] = useState(valueFromStore === undefined ? defaultValue : valueFromStore);

	useEffect(() => {
		const unsubscribe = subscribeToStore(() => {
			const nextValue = getSetting(settingKey, getState());
			console.log(parser, parser(nextValue));
			if (value !== nextValue) setValue(nextValue);
		});

		return () => unsubscribe();
	});

	return {
		[valueKey]: value,
		onChange: e => dispatchToStore(updateValue(settingKey, parser(valueExtractor(e)))),
	};
};

export const useAdminTextController = createAdminInputController('value', e => e.target.value);

export const useAdminCheckboxController = createAdminInputController('checked', e => e.target.checked);
