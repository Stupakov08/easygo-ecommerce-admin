import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './chart';
import Summaries from './summaries.jsx';
import Orders from './orders';
import useStyles from './useStyles';
import { useDataProvider } from 'react-admin';
import { useAuthenticated } from 'react-admin';

function createData(chartArray) {
	let data = chartArray.map(({ _id, amount, count }) => {
		return {
			count,
			amount: amount / 100,
			date: `${_id.date.month} / ${_id.date.day} / ${_id.date.year}`,
		};
	});

	data = data.sort((a, b) => {
		const ad = new Date(a.date);
		const bd = new Date(b.date);
		if (ad > bd) return 1;
		if (ad < bd) return -1;
		if (ad === bd) return 0;
	});
	return [...data];
}

export default function Dashboard(props) {
	useAuthenticated();
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const dataProvider = useDataProvider();
	const [chart, setСhart] = useState(null);
	const [summ, setSumm] = useState({});

	useEffect(() => {
		dataProvider.getOne('chart').then(({ data }) => {
			setСhart(createData(data.chart));
			setSumm(data.summaries);
		});
	}, []);

	return (
		<>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						<Paper className={fixedHeightPaper}>
							<Chart data={chart} />
						</Paper>
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<Paper className={fixedHeightPaper}>
							<Summaries data={summ} />
						</Paper>
					</Grid>
					{/* Recent Orders */}
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Orders {...props} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
