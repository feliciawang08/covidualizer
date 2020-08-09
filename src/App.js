import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import titleImage from './images/covidualizer.png';
import Emoji from 'react-emoji-render';

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
				<div>
					<p>
						Learn how to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank">stop the spread.</a> 
					</p>
				</div> 
				<div>
					<p>
						<a href="https://github.com/feliciawang08" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/felicia-wang-08/" target="_blank"> LinkedIn</a>
					</p>
				</div>
				<div className={styles.bottom}>
					<Emoji text="Made with :heart: by Felicia Wang | Est. Aug. 2020" /> 
			</div>
			</div>

	)}
		
	}

export default App;