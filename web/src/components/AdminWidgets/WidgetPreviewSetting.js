import React from 'react';
import { makeStyles } from '@material-ui/core';

import { withTheme } from '../../utils/Theme';

const useClasses = makeStyles({
	container: {
		padding: 10,
		marginBottom: 20,
		backgroundColor: '#222',
	},
	title: {
		fontSize: '1.1em',
	},
	body: {
		display: 'flex',
	},
	previewWrapper: {
		width: 240,
	},
	previewContainer: ({ baseFontSize }) => ({
		fontSize: baseFontSize,
		width: 480,
		// boxShadow: '0 0 10px 0 #000',
		transform: 'scale(0.5)',
		transformOrigin: '0 0',
		backgroundColor: '#111',
	}),
	content: {
		felx: 1,
		paddingLeft: 20,
	},
});

const WidgetPreviewSetting = ({ PreviewWidget, previewProps, title, children, theme }) => {
	// const { baseFontSize } = theme;
	const classes = useClasses({ baseFontSize: '96px' });
	
	return (
		<div className={classes.container}>
			{title && <h2 className={classes.title}>{title}</h2>}
			<div className={classes.body}>
				<div className={classes.previewWrapper}>
					<div className={classes.previewContainer} title="Previwe at 50% scale">
						<PreviewWidget {...previewProps} />
					</div>
				</div>
				<div className={classes.content}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default withTheme(WidgetPreviewSetting);
