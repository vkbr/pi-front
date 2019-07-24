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

export const getSetting = (key, { admin }) => {
	const stagedValue = admin.stagedSettings[key];
	if (stagedValue !== undefined) {
		return stagedValue;
	}
	const { settings } = admin;
	const adminSetting = settings[key];

	if (adminSetting !== undefined) {
		return adminSetting;
	}

	if (key.startsWith('w.')) {
		return settings[key.split('.').slice(2).join('.')];
	}
};

export const createSettingsProvider = keys => ({ admin }) => keys.reduce((prev, key) => {
	const stagedValue = admin.stagedSettings[key];
	return {
		...prev,
		[key]: stagedValue !== undefined ? stagedValue : admin.settings[key]
	};
}, {});

export const updateValue = (key, value) => ({
	type: ActionTypes.UpdateValue,
	key,
	value,
});
