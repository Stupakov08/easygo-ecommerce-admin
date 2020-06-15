import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	BooleanInput,
	PasswordInput,
} from 'react-admin';

export const AdminCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='email' />
			<BooleanInput source='superadmin' />
			<PasswordInput source='password' />
			<PasswordInput label={'Confirm password'} source='passwordconf' />
		</SimpleForm>
	</Create>
);

export default AdminCreate;
