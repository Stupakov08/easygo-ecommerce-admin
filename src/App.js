import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './lists/product-list';

const dataProvider = jsonServerProvider('http://localhost:8000/api');
const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name='products' list={ProductList} />
	</Admin>
);

export default App;
