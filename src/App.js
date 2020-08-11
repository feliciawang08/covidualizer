import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';
import titleImage from './images/covidualizer.png';
import Emoji from 'react-emoji-render';
import { IconContext } from "react-icons"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

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
		const arialFont = { fontFamily: 'Arial'};

		return (
			<div className={styles.container}>
				<img className={styles.image} src={titleImage} alt="COVIDUALIZER"/>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data = { data } country = { country }  /> 
				<div>
					<p style={ arialFont }>
						Learn how to <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html" target="_blank" rel="noopener noreferrer">stop the spread.</a> 
					</p>
				</div> 
				<IconContext.Provider value={{ color: "black", size: 30, className: "social-icons" }}>
					<div>
						<a href="https://github.com/feliciawang08" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a> <a href="https://www.linkedin.com/in/felicia-wang-08/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
					</div>
				</IconContext.Provider>
				<div className={styles.bottom}>
					<Emoji text="Made with :heart: by Felicia Wang | Est. Aug. 2020" /> 
			</div>
			</div>

	)}
		
	}

export default App;