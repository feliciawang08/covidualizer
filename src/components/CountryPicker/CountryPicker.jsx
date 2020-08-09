import React, { useState, useEffect } from 'react';
import { FormControl } from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		}

		fetchAPI();
	}, [setFetchedCountries]);

	console.log(fetchedCountries);

	// List of countries
	return (
		<FormControl className = {styles.formControl}>
			<Autocomplete
				onChange={(event, newValue) => {
					handleCountryChange(newValue);
				}}
				options={fetchedCountries}
				renderInput={(params) => (
					<TextField {...params} label="Select a Country" variant="outlined" />
				)}
			/>
		</FormControl>
	)
}

export default CountryPicker;