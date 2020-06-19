import React, { useEffect, useState } from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	TextField,
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

export const ProductEdit = (props) => {
	const dataProvider = useDataProvider();
	const [categs, setCategs] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
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
		<Edit {...props}>
			<SimpleForm>
				<TextField source='title' label={' '} style={{ fontSize: '32px' }} />
				<TextInput
					disabled
					label='Code'
					source='code'
					fullWidth
					validate={[required()]}
				/>
				<TextInput source='title' fullWidth validate={[required()]} />
				<NumberInput
					source='price'
					fullWidth
					step={0.01}
					validate={[required()]}
				/>
				<TextInput source='description' multiline fullWidth />
				<ArrayInput source='categories'>
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
					fullWidth
					className={'image-input-create'}
					maxSize={15000000}
				>
					<ImageField source='url' />
				</ImageInput>
			</SimpleForm>
		</Edit>
	);
};

export default ProductEdit;
