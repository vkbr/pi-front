import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { yellow } from '@material-ui/core/colors';

const useClasses = makeStyles({
	link: {
		borderRight: '2px solid transparent',

		'&.active': {
			borderColor: yellow.A400,
			backgroundColor: '#383838',
		},
	},
});

const ListItemLink = (props) => {
	const classes = useClasses({});

  return <ListItem
		button
		className={`${
			classes.link} ${
				props.className || ''} ${
					props.path === props.to ? 'active' : ''}`}
		component={Link}
		{...props}
	/>;
};

const AdminNav = (props) => {
	const { location } = props;

	return (
		<List>
			<ListItemLink to="/admin" path={location.pathname}>
				Home
			</ListItemLink>
			<ListItemLink to="/admin/widgets" path={location.pathname}>
				Widgets
			</ListItemLink>
		</List>
	);
}

export default withRouter(AdminNav);
