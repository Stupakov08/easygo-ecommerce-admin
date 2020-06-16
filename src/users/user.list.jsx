import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	BooleanField,
	EmailField,
} from 'react-admin';
import { useAuthenticated } from 'react-admin';
import { Pagination } from 'react-admin';
// import PostBulkActionButtons from './product.bulk';
import UserFilter from './user.filter';

const CustomerPagination = (props) => (
	<Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const UserList = (props) => {
	useAuthenticated();
	return (
		<List {...props} filters={<UserFilter />}>
			<Datagrid rowClick='edit'>
				<TextField source='name' />
				<EmailField source='email' />
				<BooleanField source='verified' />
				<DateField source='createdAt' />
				<DateField source='updatedAt' />
			</Datagrid>
		</List>
	);
};
export default UserList;
