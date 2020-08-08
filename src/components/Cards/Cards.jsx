import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

// Creating grid that will space out and center Cards
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	console.log(confirmed);
	if (!confirmed) { // If confirmed data not yet ready, return 'Loading'
		return 'Loading...';
	}
	return (
		<div className = {styles.container} >
			<Grid container spacing = {3} justify="center"> 
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Confirmed Cases</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator=","
							/>
						</Typography> 
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of confirmed active cases</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator=","
							/>
						</Typography> 
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of confirmed recoveries</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator=","
							/>
						</Typography> 
						<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of confirmed deaths</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards;