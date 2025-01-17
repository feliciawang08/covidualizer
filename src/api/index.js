import axios from 'axios'; // handles APIs

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => { //Asynchronous function
	let changeableUrl = url;

	if (country) { // if valid country
		changeableUrl = `${url}/countries/${country}`
	}

	try {
		// take only data that we need
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl); 

		const modifiedData = { confirmed, recovered, deaths, lastUpdate };
		return modifiedData; 
	} catch (error) {
		console.log(error);
	}
}

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`);
		
		const modifiedData = data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));

		return modifiedData;
	} catch(error) {
		console.log(error);
	}
}

export const fetchCountries = async () => {
	try {
		const { data: { countries }} = await axios.get(`${url}/countries`);

		return countries.map((country) => country.name);
	} catch (error) {
		console.log(error);
	}
}