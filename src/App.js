import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import ProductList from './product/product.list';
import AdminUserList from './adminuser/adminuser.list';
import UserList from './users/user.list';
import CategoryList from './categories/categories.list';
import authProvider from './authProvider';
import MyLoginPage from './pages/login/login';
import ProductShow from './product/product.shows';
import ProductCreate from './product/product.create';
import CategoryCreate from './categories/category.create';
import AdminCreate from './adminuser/adminuser.create';
import ProductEdit from './product/product.edit';
import UserAdminEdit from './adminuser/adminuser.edit';
import CategoryEdit from './categories/category.edit';
import dataProvider from './dataProvider';
import UserIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CategoryIcon from '@material-ui/icons/Category';
import DashBoardIcon from '@material-ui/icons/Dashboard';

const App = () => (
	<Admin
		loginPage={MyLoginPage}
		dataProvider={dataProvider}
		authProvider={authProvider}
	>
		{(permissions) => {
			return [
				<Resource
					name='dashboard'
					icon={DashBoardIcon}
					options={{ label: 'Dashboard' }}
					list={UserList}
				/>,
				<Resource
					name='categories'
					icon={CategoryIcon}
					options={{ label: 'Categories' }}
					create={CategoryCreate}
					list={CategoryList}
					edit={CategoryEdit}
				/>,
				<Resource
					name='products'
					show={ProductShow}
					create={ProductCreate}
					list={ProductList}
					edit={ProductEdit}
				/>,
				<Resource
					name='admin/user'
					options={{ label: 'Administrators' }}
					icon={PeopleOutlineIcon}
					list={AdminUserList}
					create={permissions === 'superadmin' && AdminCreate}
					edit={permissions === 'superadmin' && UserAdminEdit}
				/>,
				<Resource
					name='user'
					options={{ label: 'Customers' }}
					icon={UserIcon}
					list={UserList}
				/>,
				<Resource
					name='orders'
					icon={ShoppingCartIcon}
					options={{ label: 'Orders' }}
					list={UserList}
				/>,
			];
		}}
	</Admin>
);

export default App;
