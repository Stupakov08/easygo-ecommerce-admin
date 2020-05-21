import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ReferenceField,
	ImageField,
	EditButton,
	ShowButton,
	DeleteButton,
} from 'react-admin';
import ProductGrid from './product.grid';
import { useAuthenticated } from 'react-admin';
import { Pagination } from 'react-admin';
import PostBulkActionButtons from './product.bulk';
import PostFilter from './product.filter';

const PostPagination = (props) => (
	<Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const ProductList = (props) => {
	useAuthenticated();
	return (
		<List
			{...props}
			title='Products'
			filters={<PostFilter />}
			pagination={<PostPagination />}
			bulkActionButtons={<PostBulkActionButtons />}
		>
			<ProductGrid rowClick='show'>
				<ImageField
					source='images[0].url'
					label='Image'
					className={'image-list'}
				/>
				<TextField source='code' />
				<TextField source='title' className={'title-list'} />
				<TextField
					source='price'
					options={{ style: 'currency', currency: 'USD' }}
				/>
				<TextField source='description' className={'description-list'} />
				<DateField source='createdAt' />
				<DateField source='updatedAt' />
				<ShowButton />
				<EditButton />
				<DeleteButton undoable={false} />
			</ProductGrid>
		</List>
	);
};
export default ProductList;
