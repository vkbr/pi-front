import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ProgressInfo from '../components/ProgressInfo';

let oldData = {
	temp: '00.00',
	cpu: '0%',
	ram: {
		usagePer: '0',
		max: ' ',
	},
};

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
				this.setState({ temp: data.temp, ram: data.ram, cpu: data.cpu });
			})
			.catch(console.error);
	}

	render() {
		const { temp, cpu, ram } = this.state;
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<div className={classes.infoUsage}>
					<ProgressInfo
						label="RAM"
						pergentage={ram.usagePer}
						value={ram.usagePer}
						upperBound={ram.max}
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
	}
}


export default wrapStyles(SystemHealth);
