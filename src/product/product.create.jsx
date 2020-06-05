import React, { useEffect, useState } from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
	NumberInput,
	ArrayInput,
	SimpleFormIterator,
	AutocompleteInput,
	ReferenceInput,
	SelectInput,
	ReferenceArrayInput,
	SelectArrayInput,
	useGetList,
	useDataProvider,
	Loading,
	Error,
} from 'react-admin';

export const ProductCreate = (props) => {
	const dataProvider = useDataProvider();
	const [categs, setCategs] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		debugger;
		dataProvider
			.getList('categories', {
				pagination: { page: 1, perPage: 8 },
				sort: { field: 'createdAt', order: 'ASC' },
			})
			.then(({ data }) => {
				setCategs(data.map((c) => ({ name: c.title, id: c.id })));
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) return <Loading />;
	if (error) return <Error />;

	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source='title' />
				<TextInput source='code' />
				<TextInput source='description' multiline />
				<NumberInput source='price' />
				<ArrayInput source='categories'>
					<SimpleFormIterator>
						<AutocompleteInput
							source='_id'
							label={'Category'}
							choices={categs}
						/>
					</SimpleFormIterator>
				</ArrayInput>
				<ImageInput source='images' label='Images' accept='image/*' multiple>
					<ImageField source='images' />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};

export default ProductCreate;
