import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	BooleanField,
	FunctionField,
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export const Orders = (props) => {
	const classes = useStyles();
	return (
		<>
			<Typography variant='h5' className={classes.title}>
				Recent orders
			</Typography>
			<List
				{...props}
				title='Dashboard'
				pagination={false}
				bulkActionButtons={false}
				hasEdit={false}
				hasCreate={false}
				resource={'orders'}
				basePath={'/orders'}
				actions={false}
				sort={{ field: 'createdAt', order: 'DESC' }}
			>
				<Datagrid rowClick='show'>
					<TextField source='orderId' label={'Order number'} />
					<TextField source='userId.email' label={'Email'} />
					<FunctionField
						label='Amount'
						render={(record) => `${record.payment.amount / 100} ₴`}
						className={'no-wrap'}
					/>
					<DateField source='createdAt' />
					<BooleanField source='processed' />
				</Datagrid>
			</List>
		</>
	);
};
export default Orders;
