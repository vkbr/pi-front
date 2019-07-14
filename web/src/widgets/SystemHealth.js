import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

let oldData = {
	temp: '00.00',
};

const wrapStyles = withStyles({
	sup: {
		marginTop: '-1em',
		fontSize: '0.5em',
	},
});

class SystemHealth extends PureComponent {
	static propTypes = {
		resetTimer: PropTypes.func.isRequired,
	};

	state = oldData;

	componentDidMount() {
		fetch('http://localhost:3444/data/system')
			.then(response => response.json())
			.then((data) => {
				oldData = data;
				this.setState({ temp: data.temp });
			})
			.catch(console.error);
	}

	render() {
		const { temp } = this.state;
		const { classes } = this.props;

		return (
			<div>
				<span>{temp}</span>
				<sup className={classes.sup}>o</sup>
				<span>C</span>
			</div>
		);
	}
}


export default wrapStyles(SystemHealth);
