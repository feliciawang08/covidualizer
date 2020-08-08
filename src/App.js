import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';

class App extends React.Component {

	state = {
		data: {}, // empty until populated
		country: '',
	}

	async componentDidMount() {
		const fetchedData = await fetchData();
		
		this.setState({ data: fetchedData }); // populate data in state with fetchedData
	}

	handleCountryChange = async (country) => {
		console.log(country);
		// Fetch data, then set state
	}

	render() {
		const { data } = this.state;

		return (
			<div className = {styles.container}>
				<Cards data = {data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart />
			</div>
		)
	}
}

export default App;