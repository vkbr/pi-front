import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ProgressInfo from '../../components/ProgressInfo';

const wrapStyles = withStyles({
	sup: {
		marginTop: '-1em',
		fontSize: '0.5em',
	},
	container: {
		flexDirection: 'column',

		'& > div': {
			width: '100%',
		},
	},
	temp: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	infoUsage: {
		fontSize: '0.4em',
		height: 70,
		alignItems: 'center',
	},
});

const SystemHealth = ({ classes, ramUsagePer, ramMax, temp, cpu }) => {
	return (
		<div className={classes.container}>
			<div className={classes.infoUsage}>
				<ProgressInfo
					label="RAM"
					pergentage={ramUsagePer}
					value={ramUsagePer}
					upperBound={ramMax}
				/>
			</div>
			<div className={classes.temp}>
				<span>{temp}</span>
				<sup className={classes.sup}>o</sup>
				<span>C</span>
			</div>
			<div className={classes.infoUsage}>
				<ProgressInfo
					value={cpu}
					pergentage={cpu}
					upperBound=" "
					label="CPU"
				/>
			</div>
		</div>
	);
};

SystemHealth.propTypes = {
	ramUsagePer: PropTypes.string.isRequired,
	ramMax: PropTypes.string.isRequired,
	temp: PropTypes.string.isRequired,
};

export default wrapStyles(SystemHealth);
