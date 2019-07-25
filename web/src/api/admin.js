import { api } from ".";

export const getSettings = () => api('/api/settings-data');

export const saveSettings = setting => api('/api/write-setting', {
	method: 'post',
	body: JSON.stringify(setting),
	header: {
		'Content-Type': 'application/json',
	},
});
