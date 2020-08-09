import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import titleImage from './images/covidualizer.png';

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
		const fetchedData = await fetchData(country);
		
		this.setState({ data: fetchedData, country: country});
	}

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={titleImage} alt="COVIDUALIZER"/>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data = { data } country = { country }  /> 
			</div>
		)}
		
	}

export default App;