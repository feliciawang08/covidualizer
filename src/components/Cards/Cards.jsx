import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN03TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n03';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

//Bottom useGridStyles and useStyles graciously taken and modified from MUI Treasury
const useGridStyles = makeStyles(({ breakpoints }) => ({
	root: {
		[breakpoints.up('md')]: {
			justifyContent: 'center',
		},
	},
}));

const useStyles = makeStyles(() => ({
	root: {
		maxWidth: 343,
		maxHeight: 350,
		borderRadius: 20,
		margin: 50,
	},
	content: {
		padding: 24,
	},
}));


// Creating grid that will space out and center Cards
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	const gridStyles = useGridStyles();
	const styles = useN03TextInfoContentStyles();
	const shadowStyles = useLightTopShadowStyles();
	const cardStyles = useStyles();

	console.log(confirmed);
	if (!confirmed) { // If confirmed data not yet ready, return 'Loading'
		return 'Loading...';
	}
	return (
		<div className = {styles.container} >
			<Grid classes={gridStyles} container spacing = {4}> 
				<Grid item component={Card} xs={12} md={3} className={cx(cardStyles.root, shadowStyles.root)}>
					<BrandCardHeader
						image={'https://img.favpng.com/1/12/3/computer-icons-png-favpng-7SbJJ8GfuwRk8C3kFBUqYbbte.jpg'}	
						extra={'LAST UPDATED: ', new Date(lastUpdate).toDateString()}
					/>
					<CardContent className={cardStyles.content}>
						<TextInfoContent
							classes={styles}
							overline={'CONFIRMED CASES'}
							heading={
								<CountUp start={0} end={confirmed.value} duration={2.5} separator=","
								/>
							}
							body={
								'Number of confirmed active cases of COVID-19.'
							}
						/>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(cardStyles.root, shadowStyles.root)}>
					<BrandCardHeader
						image={'https://www.vippng.com/png/detail/452-4525287_health-benefits-clipart-health-icon-green-png.png'}	
						extra={new Date(lastUpdate).toDateString()}
					/>
					<CardContent className={cardStyles.content}>
						<TextInfoContent
							classes={styles}
							overline={'RECOVERIES'}
							heading={
								<CountUp start={0} end={recovered.value} duration={2.5} separator=","
								/>
							}
							body={
								'Number of confirmed recoveries from COVID-19.'
							}
						/>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(cardStyles.root, shadowStyles.root)}>
					<BrandCardHeader
						image={'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/death1-circle-red-512.png'}	
						extra={new Date(lastUpdate).toDateString()}
					/>
					<CardContent className={cardStyles.content}>
						<TextInfoContent
							classes={styles}
							overline={'DEATHS'}
							heading={
								<CountUp start={0} end={deaths.value} duration={2.5} separator=","
								/>
							}
							body={
								'Number of confirmed confirmed deaths from COVID-19.'
							}
						/>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards;