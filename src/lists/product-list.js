import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ReferenceField,
	EditButton,
	ShowButton,
	DeleteButton,
} from 'react-admin';
import ProductGrid from './grids/product-grid';

export const ProductList = (props) => {
	return (
		<List {...props} title='Products'>
			<ProductGrid rowClick='edit'>
				{/* <ReferenceField source='_id' reference='product'>
					<TextField source='id' />
				</ReferenceField> */}
				<TextField source='_id' />
				<TextField source='title' />
				<TextField source='description' />
				<DateField source='createdAt' />
				<DateField source='updatedAt' />
				<EditButton />
				<ShowButton />
				<DeleteButton />
			</ProductGrid>
		</List>
	);
};
export default ProductList;
