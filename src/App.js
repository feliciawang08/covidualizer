import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';

class App extends React.Component {

	state = {
		data: {}, // empty until populated
	}

	async componentDidMount() {
		const fetchedData = await fetchData();
		
		this.setState({ data: fetchedData }); // populate data in state with fetchedData
	}

	render() {
		const { data } = this.state;

		return (
			<div className = {styles.container}>
				<Cards data = {data} />
				<CountryPicker />
				<Chart />
			</div>
		)
	}
}

export default App;