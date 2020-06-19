import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	BooleanInput,
	PasswordInput,
	Toolbar,
	SaveButton,
	DeleteButton,
} from 'react-admin';
import decodeJwt from 'jwt-decode';

const UserAdminEditToolbar = (props) => {
	const token = localStorage.getItem('token');
	let decodedToken;

	if (token) {
		decodedToken = decodeJwt(token);
	}

	return (
		<Toolbar {...props} className={'flex-between'}>
			<SaveButton />
			{decodedToken.payload.userId !== props.record.id && <DeleteButton />}
		</Toolbar>
	);
};

export const UserAdminEdit = (props) => (
	<Edit {...props}>
		<SimpleForm toolbar={<UserAdminEditToolbar />}>
			<TextInput source='email' />
			<BooleanInput source='superadmin' />
			<PasswordInput source='password' />
			<PasswordInput source='passwordconf' />
		</SimpleForm>
	</Edit>
);

export default UserAdminEdit;
