import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ReferenceField,
	ImageField,
	EditButton,
	ShowButton,
	DeleteButton,
	BooleanField,
	NumberField,
	EmailField,
} from 'react-admin';
import { useAuthenticated } from 'react-admin';
import { Pagination } from 'react-admin';
// import PostBulkActionButtons from './product.bulk';
import AdminUserFilter from './adminuser.filter';

export const AdminUserList = (props) => {
	useAuthenticated();
	return (
		<List {...props} title={'Administrators'} filters={<AdminUserFilter />}>
			<Datagrid rowClick='edit'>
				<EmailField source='email' />
				<DateField source='createdAt' />
				<DateField source='updatedAt' />
				{props.permissions && <EditButton />}
			</Datagrid>
		</List>
	);
};
export default AdminUserList;
