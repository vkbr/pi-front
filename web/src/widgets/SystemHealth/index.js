import React, { PureComponent } from 'react';

import SystemHealthPresent from './SystemHealth';

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

		return (
			<SystemHealthPresent
				ramUsagePer={ram.usagePer}
				ramMax={ram.max}
				temp={temp}
				cpu={cpu}
			/>
		);
	}
}


export default SystemHealth;
