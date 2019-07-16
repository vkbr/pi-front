import React from 'react';
import { makeStyles } from '@material-ui/styles';

import ProgressBar from './ProgressBar';

const useClasses = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	progressbarContainer: {
		flex: 1,
	},
	label: {
		color: '#f77',
	},
	bounds: {
		width: 100,
		fontWeight: 'normal',
		textAlign: 'center',
		fontSize: '0.8em',
	},
});


const ProgressInfo = ({ pergentage, label, value, upperBound }) => {
	const classes = useClasses({});

	return (
		<div className={classes.container}>
			{label && <div className={`${classes.bounds} ${classes.label}`}>
				{label}
			</div>}
			{value && <div className={classes.bounds}>
				{value}
			</div>}
			<div className={classes.progressbarContainer}>
				<ProgressBar pergentage={pergentage} />
			</div>
			{upperBound && <div className={classes.bounds}>
				{upperBound}
			</div>}
		</div>
	);
}

export default ProgressInfo;
