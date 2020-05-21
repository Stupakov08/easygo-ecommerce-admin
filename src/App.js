import React from 'react';
import { Admin, Resource } from 'react-admin';
import ProductList from './product/product.list';
import authProvider from './authProvider';
import MyLoginPage from './pages/login/login';
import ProductShow from './product/product.shows';
import ProductCreate from './product/product.create';
import ProductEdit from './product/product.edit';
import dataProvider from './dataProvider';

const App = () => (
	<Admin
		loginPage={MyLoginPage}
		dataProvider={dataProvider}
		authProvider={authProvider}
	>
		<Resource
			name='products'
			show={ProductShow}
			create={ProductCreate}
			list={ProductList}
			edit={ProductEdit}
		/>
	</Admin>
);

export default App;
