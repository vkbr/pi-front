const fs = require('fs').promises;
const os = require('os');
const path = require('path');

const adminDefaultConfigs = require('../../web/src/config/defaultSettings.json');

const RC_FILE_PATH = path.resolve(os.homedir(), './.pifront');

function readSettingsFile() {
	return fs.readFile(RC_FILE_PATH)
		.catch(() => adminDefaultConfigs);
}

function writeSettingToFile(data) {
	console.log(data);
	console.log(typeof data);
	console.log(JSON.stringify(data, null, 2));
	return fs.writeFile(RC_FILE_PATH, JSON.stringify(data, null, 2));
}

module.exports = {
	readSettingsFile,
	writeSettingToFile,
};
