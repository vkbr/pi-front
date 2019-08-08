import { dispatchToStore } from '.';
import { fetchSettings } from '../store/admin';

const REFRESH_INTERVAL = 5000;

const fetchSettingsWithDispatch = fetchSettings();

let timer;
export const startSettingsIntervalSync = () => {
	timer = setTimeout(() => {
		fetchSettingsWithDispatch(dispatchToStore)
			.then(startSettingsIntervalSync);
	}, REFRESH_INTERVAL);
};

export const clearSettingsIntervalSync = () => clearTimeout(timer);

export const getTransition = () => 'all 0.4s ease-out';
