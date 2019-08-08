import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SystemHealthPresent from './SystemHealth';
import { getSetting } from '../../store/admin';

let oldData = {
	temp: '00.00',
	cpu: '0%',
	ram: {
		usagePer: '0',
		max: ' ',
	},
};

class SystemHealth extends PureComponent {
	static propTypes = {
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
		const { baseFontSize } = this.props;

		return (
			<SystemHealthPresent
				ramUsagePer={ram.usagePer}
				ramMax={ram.max}
				temp={temp}
				cpu={cpu}
				styles={{ baseFontSize }}
			/>
		);
	}
}

const getBaseFont = getSetting('w.system.styles.baseFontSize');

export default connect(state => ({
	baseFontSize: getBaseFont(state),
}))(SystemHealth);
