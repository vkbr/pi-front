import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Button, Typography } from '@material-ui/core';

const useClasses = makeStyles({
	container: {
		paddingLeft: 270,
	},
	subtext: {
		marginLeft: 20,
		color: '#999',
	},
});

const WidgetSaveController = ({ hasNoUnsavedValues }) => {
	const classes = useClasses({});
	
	return (
		<div className={classes.container}>
			<Button
				disabled={hasNoUnsavedValues}
				color="primary"
				variant="contained"
			>Save</Button>
			{hasNoUnsavedValues && (
				<Typography variant="caption" className={classes.subtext}>All caught up</Typography>
			)}
		</div>
	);
};

export default connect(({ admin }) => ({
	hasNoUnsavedValues: Object.keys(admin.stagedSettings).length === 0,
}))(WidgetSaveController);
