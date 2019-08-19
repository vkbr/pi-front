import { api } from ".";

export const getSettings = () => api('/api/settings-data');

export const saveSettings = setting => api('/api/write-settings', {
	method: 'post',
	body: JSON.stringify(setting),
	headers: {
		'Content-Type': 'application/json',
	},
});

export const updateAndRestart = () => api('/api/admin/update-app');
