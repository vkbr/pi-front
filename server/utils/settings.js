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
	return fs.writeFile(RC_FILE_PATH, JSON.stringify(data, null, 2));
}

module.exports = {
	readSettingsFile,
	writeSettingToFile,
};
