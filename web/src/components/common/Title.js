import React from 'react';
import { makeStyles} from '@material-ui/styles';

const useClasses = makeStyles({
	title: {
		fontSize: '2em',
		marginBottom: 20,
		marginTop: 0,
		borderBottom: '1px solid #444',
		fontWeight: 'normal',
	},
});

const Title = ({ children }) => {
	const classes = useClasses({});
	
	return (
		<div className={classes.title}>{children}</div>
	);
};

export default Title;
