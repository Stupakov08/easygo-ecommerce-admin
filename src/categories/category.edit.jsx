import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CategoryEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='title' />
		</SimpleForm>
	</Edit>
);

export default CategoryEdit;
