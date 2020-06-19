import React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
	required,
} from 'react-admin';

export const CategoryCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='title' validate={[required()]} />
			<ImageInput
				source='image'
				label='Image'
				accept='image/*'
				maxSize={15000000}
				className={'image-input-create'}
				validate={[required()]}
			>
				<ImageField source='image' />
			</ImageInput>
		</SimpleForm>
	</Create>
);

export default CategoryCreate;
