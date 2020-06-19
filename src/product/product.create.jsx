import React, { useEffect, useState } from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	ImageField,
	ImageInput,
	NumberInput,
	ArrayInput,
	SimpleFormIterator,
	AutocompleteInput,
	useDataProvider,
	Loading,
	Error,
	required,
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
				<TextInput source='title' validate={[required()]} fullWidth />
				<TextInput source='code' validate={[required()]} fullWidth />
				<TextInput source='description' multiline fullWidth />
				<NumberInput source='price' validate={[required()]} fullWidth />
				<ArrayInput source='categories' fullWidth>
					<SimpleFormIterator>
						<AutocompleteInput
							source='_id'
							label={'Category'}
							choices={categs}
						/>
					</SimpleFormIterator>
				</ArrayInput>
				<ImageInput
					source='images'
					label='Images'
					accept='image/*'
					multiple
					className={'image-input-create'}
				>
					<ImageField source='images' />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};

export default ProductCreate;
