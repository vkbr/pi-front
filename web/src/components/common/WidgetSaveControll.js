import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles, Button, Typography } from '@material-ui/core';

import { saveStagedChanges } from '../../store/admin';

const useClasses = makeStyles({
	container: {
		paddingLeft: 270,
	},
	subtext: {
		marginLeft: 20,
		color: '#999',
	},
});

const WidgetSaveController = ({ hasNoUnsavedValues, saveStagedChanges }) => {
	const classes = useClasses({});
	
	return (
		<div className={classes.container}>
			<Button
				disabled={hasNoUnsavedValues}
				color="primary"
				variant="contained"
				onClick={saveStagedChanges}
			>Save</Button>
			{hasNoUnsavedValues && (
				<Typography variant="caption" className={classes.subtext}>All caught up</Typography>
			)}
		</div>
	);
};

const mapStateToProps = ({ admin }) => ({
	hasNoUnsavedValues: Object.keys(admin.stagedSettings).length === 0,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	saveStagedChanges,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WidgetSaveController);
