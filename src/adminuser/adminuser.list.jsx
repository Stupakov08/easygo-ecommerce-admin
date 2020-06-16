import React from 'react';
import { List, Datagrid, DateField, EditButton, EmailField } from 'react-admin';
import { useAuthenticated } from 'react-admin';

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
