import React from 'react';
import {
	Show,
	SimpleShowLayout,
	TextField,
	DateField,
	EditButton,
	RichTextField,
	TopToolbar,
	DeleteButton,
	ImageField,
	NumberField,
	ArrayField,
	SingleFieldList,
	ChipField,
} from 'react-admin';

const PostShowActions = ({ permissions, basePath, data, resource }) => (
	<TopToolbar>
		<EditButton basePath={basePath} record={data} />
		<DeleteButton basePath={basePath} record={data} resource={resource} />
	</TopToolbar>
);

export const ProductShow = ({ permissions, ...props }) => (
	<Show {...props} actions={<PostShowActions permissions={permissions} />}>
		<SimpleShowLayout>
			<TextField source='title' label={' '} style={{ fontSize: '32px' }} />
			<TextField source='code' />
			<TextField source='title' />
			<NumberField
				source='price'
				options={{ style: 'currency', currency: 'USD' }}
			/>
			<RichTextField source='description' />
			<ArrayField source='categories' className={'pointerOff'}>
				<SingleFieldList>
					<ChipField source='title' click />
				</SingleFieldList>
			</ArrayField>
			<ImageField source='images' src='url' title='images' />
			<DateField label='Publication date' source='createdAt' />
			<DateField label='Publication date' source='updatedAt' />
		</SimpleShowLayout>
	</Show>
);

export default ProductShow;
