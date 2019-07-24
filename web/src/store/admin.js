import defaultSettings from '../config/defaultSettings.json';
import { getSettings } from '../api/admin.js';

const initialState = {
	settings: {
		...defaultSettings,
	},
};

const ActionTypes = {
	UpdateSettings: 'adm/UpdateSettings',
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
		default:
			return state;
	}
};

export const fetchSettings = () => dispatch => getSettings().then(settings => dispatch({
	type: ActionTypes.UpdateSettings,
	settings,
}));
