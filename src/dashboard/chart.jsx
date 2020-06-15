import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
	AreaChart,
	CartesianGrid,
	Area,
	XAxis,
	YAxis,
	Label,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function Chart({ data = [] }) {
	const theme = useTheme();
	const classes = useStyles();
	debugger;
	return (
		<React.Fragment>
			<Typography variant='h5' className={classes.title}>
				Monthly revenue chart
			</Typography>
			<ResponsiveContainer>
				<AreaChart
					data={data}
					margin={{
						top: 16,
						right: 16,
						bottom: 0,
						left: 28,
					}}
				>
					<XAxis dataKey='date' stroke={theme.palette.text.secondary} />
					<YAxis stroke={theme.palette.text.secondary}>
						<Label
							angle={270}
							position='left'
							style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
						>
							Sales (₴)
						</Label>
					</YAxis>
					<YAxis
						stroke={theme.palette.text.secondary}
						yAxisId='right'
						orientation='right'
					/>
					<CartesianGrid strokeDasharray='3 3' />
					<Tooltip
						formatter={(value, name, props) => {
							return [`${value} ₴`, 'Day revenue'];
						}}
					/>
					<Area
						type='monotone'
						dataKey='amount'
						stroke={theme.palette.text.main}
						fill={theme.palette.text.main}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
