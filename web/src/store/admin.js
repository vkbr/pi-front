import defaultSettings from '../config/defaultSettings.json';
import * as api from '../api/admin.js';

const initialState = {
	stagedSettings: {},
	settings: {
		...defaultSettings,
	},
};

const ActionTypes = {
	UpdateSettings: 'adm/UpdateSettings',
	UpdateValue: 'adm/UpdateValue',
};

export default (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.UpdateSettings:
			return {
				...state,
				settings: {
					...state.settings,
					...action.settings,
				},
			};
		case ActionTypes.UpdateValue:
			return {
				...state,
				stagedSettings: {
					...state.stagedSettings,
					[action.key]: action.value,
				},
			};
		default:
			return state;
	}
};

export const fetchSettings = () => dispatch => api.getSettings().then(settings => dispatch({
	type: ActionTypes.UpdateSettings,
	settings,
}));

export const getSetting = (key, { admin }) => admin.stagedSettings[key] || admin.settings[key];

export const createSettingsProvider = keys => ({ admin }) => keys.reduce((prev, key) => ({
	...prev,
	[key]: admin.stagedSettings[key] || admin.settings[key]
}), {});

export const updateValue = (key, value) => ({
	type: ActionTypes.UpdateValue,
	key,
	value,
});
