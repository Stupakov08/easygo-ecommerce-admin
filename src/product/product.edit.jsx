import React from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	TextInput,
	DateInput,
	ReferenceManyField,
	Datagrid,
	TextField,
	DateField,
	EditButton,
	ImageField,
	ImageInput,
	NumberInput,
} from 'react-admin';

export const ProductEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextField source='title' label={' '} style={{ fontSize: '32px' }} />
			<TextInput disabled label='Code' source='code' fullWidth />
			<TextInput source='title' fullWidth />
			<NumberInput source='price' fullWidth step={0.01} />
			<TextInput source='description' multiline fullWidth />
			<ImageInput
				source='images'
				label='Images'
				accept='image/*'
				multiple
				fullWidth
				className={'image-input-create'}
			>
				<ImageField source='url' />
			</ImageInput>
		</SimpleForm>
	</Edit>
);

export default ProductEdit;
