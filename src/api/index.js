import axios from 'axios'; // handles APIs

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => { //Asynchronous function
	try {
		// take only data that we need
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url); 

		const modifiedData = { confirmed, recovered, deaths, lastUpdate };
		return modifiedData; 
	} catch (error) {
	
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
	
	}
}