import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
} from 'react-admin';

export const CategoryCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='title' />
			<ImageInput
				source='image'
				label='Image'
				accept='image/*'
				maxSize={15000000}
				className={'image-input-create'}
			>
				<ImageField source='image' />
			</ImageInput>
		</SimpleForm>
	</Create>
);

export default CategoryCreate;
