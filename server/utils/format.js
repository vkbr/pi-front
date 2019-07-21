function fix(num = 0, afterDecimal = 1) {
	return num.toFixed(afterDecimal).replace(/\.?0*$/, '');
}

module.exports.fix = fix;