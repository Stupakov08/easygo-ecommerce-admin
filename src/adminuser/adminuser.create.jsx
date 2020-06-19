import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	BooleanInput,
	PasswordInput,
	required,
	email,
} from 'react-admin';

export const AdminCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='email' validate={[required(), email()]} />
			<BooleanInput source='superadmin' />
			<PasswordInput source='password' validate={[required()]} />
			<PasswordInput
				label={'Confirm password'}
				source='passwordconf'
				validate={[required()]}
			/>
		</SimpleForm>
	</Create>
);

export default AdminCreate;
