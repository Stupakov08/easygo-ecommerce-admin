import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	BooleanField,
	EditButton,
	ShowButton,
	FunctionField,
} from 'react-admin';
import { useAuthenticated } from 'react-admin';
import { Pagination } from 'react-admin';
import OrderFilter from './orders.filter';

const ProductPagination = (props) => (
	<Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const OrdersList = (props) => {
	debugger;
	useAuthenticated();
	return (
		<List
			{...props}
			title='Orders'
			filters={<OrderFilter />}
			pagination={<ProductPagination />}
			bulkActionButtons={false}
			sort={{ field: 'createdAt', order: 'DESC' }}
		>
			<Datagrid rowClick='show'>
				<TextField source='orderId' label={'Order number'} />
				<TextField source='userId.email' label={'Email'} />
				<TextField source='address.name' label={'Name'} />
				<FunctionField
					label='Address'
					render={(record) =>
						`${record.address.address}, ${record.address.city}, ${record.address.country}, ${record.address.zip}`
					}
				/>
				<FunctionField
					label='Amount'
					render={(record) => `${record.payment.amount / 100} ₴`}
				/>
				<DateField source='createdAt' />
				<BooleanField source='processed' />
				<ShowButton />
				<EditButton />
			</Datagrid>
		</List>
	);
};
export default OrdersList;
