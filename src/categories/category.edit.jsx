import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
} from 'react-admin';

export const CategoryEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='title' />
			<ImageInput
				source='image'
				label='Image'
				accept='image/*'
				maxSize={15000000}
				className={'image-input-create'}
			>
				<ImageField source='url' />
			</ImageInput>
		</SimpleForm>
	</Edit>
);

export default CategoryEdit;
