import React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
	required,
} from 'react-admin';

export const CategoryEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='title' validate={[required()]} />
			<ImageInput
				source='image'
				label='Image'
				accept='image/*'
				maxSize={15000000}
				validate={[required()]}
				className={'image-input-create'}
			>
				<ImageField source='url' />
			</ImageInput>
		</SimpleForm>
	</Edit>
);

export default CategoryEdit;
