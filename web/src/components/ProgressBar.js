import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useClasses = makeStyles({
	container: {
		width: '100%',
		height: 10,
		backgroundColor: '#777',
		borderRadius: 10,
		overflow: 'hidden',

		'& > div': {
			height: 10,
			backgroundColor: '#88f',
			transition: 'width 0.7s ease-out',
		},
	},
});

const ProgressBar = ({ pergentage }) => {
	const classes = useClasses({});

	return (
		<div className={classes.container}>
			<div style={{ width: pergentage }} />
		</div>
	);
}

export default ProgressBar;
