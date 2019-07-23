const fs = require('fs').promises;
const path = require('path');

const adminDefaultConfigs = require('../../web/src/config/adminDefaultConfigs');

const RC_FILE_PATH = '~/.pifront';

function readSettingsFile() {
	return fs.readFile(path.resolve(RC_FILE_PATH))
		.catch(() => adminDefaultConfigs);
}

module.exports = {
	readSettingsFile,
};
