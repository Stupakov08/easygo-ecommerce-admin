import React from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
} from 'react-admin';

export const ProductCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='title' />
			<TextInput source='description' multiline />
			<ImageInput source='images' label='Images' accept='image/*' multiple>
				<ImageField source='images' />
			</ImageInput>
		</SimpleForm>
	</Create>
);

export default ProductCreate;
