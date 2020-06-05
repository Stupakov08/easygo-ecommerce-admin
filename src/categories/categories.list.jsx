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
import { useAuthenticated } from 'react-admin';
import { Pagination } from 'react-admin';
import CategoryBulkActionButtons from './category.bulk';

const CategoryPagination = (props) => (
	<Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

export const CategoryList = (props) => {
	useAuthenticated();
	return (
		<>
			<List
				{...props}
				title='Categories'
				pagination={<CategoryPagination />}
				bulkActionButtons={<CategoryBulkActionButtons />}
			>
				<Datagrid>
					<TextField source='title' />
					<EditButton />
					<DeleteButton undoable={false} />
				</Datagrid>
			</List>
		</>
	);
};

export default CategoryList;
