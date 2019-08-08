import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ProgressInfo from '../../components/ProgressInfo';
import { getTransition } from '../../utils/widgets';

const transition = getTransition();

const useClasses = makeStyles({
	sup: {
		marginTop: '-1em',
		fontSize: '0.5em',
	},
	container: ({ baseFontSize }) => ({
		transition,
		flexDirection: 'column',
		fontSize: baseFontSize,

		'& > div': {
			width: '100%',
		},
	}),
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
		display: 'flex',

		'& > div': {
			flex: 1,
		},
	},
});

const SystemHealth = ({ ramUsagePer, ramMax, temp, cpu, styles }) => {
	const classes = useClasses(styles);

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

export default SystemHealth;
