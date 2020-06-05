import React from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
	NumberInput,
} from 'react-admin';

export const CategoryCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='title' />
		</SimpleForm>
	</Create>
);

export default CategoryCreate;
