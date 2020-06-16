import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	BooleanInput,
	PasswordInput,
} from 'react-admin';

export const UserAdminEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='email' />
			<BooleanInput source='superadmin' />
			<PasswordInput source='password' />
			<PasswordInput source='passwordconf' />
		</SimpleForm>
	</Edit>
);

export default UserAdminEdit;
