import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
export default function Summaries({ data }) {
	const classes = useStyles();
	return (
		<>
			<Paper className={classes.paperMini}>
				<Typography variant='h5'>Monthly summary</Typography>
				<Typography component='p' variant='h4' color={'primary'}>
					{data.month_summ &&
						new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'UAH',
						})
							.format(parseFloat(data.month_summ) / 100)
							.slice(0, -4) + ' ₴'}
				</Typography>
				<Typography color='textSecondary' className={classes.depositContext}>
					{new Date().toDateString()}
				</Typography>
			</Paper>
			<Paper className={classes.paperMini}>
				<Typography variant='h6'>Average daily revenue</Typography>
				<Typography component='p' variant='h5' color={'primary'}>
					{data.avg_summ &&
						new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'UAH',
						})
							.format(parseFloat(data.avg_summ) / 100)
							.slice(0, -4) + ' ₴'}
				</Typography>
			</Paper>
		</>
	);
}
