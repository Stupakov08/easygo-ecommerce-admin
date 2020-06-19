import React from 'react';
import { Admin, Resource } from 'react-admin';
import ProductList from './product/product.list';
import AdminUserList from './adminuser/adminuser.list';
import UserList from './users/user.list';
import OrdersList from './orders/orders.list';
import CategoryList from './categories/categories.list';
import authProvider from './authProvider';
import MyLoginPage from './pages/login/login';
import ProductShow from './product/product.shows';
import OrdersShow from './orders/order.shows';
import ProductCreate from './product/product.create';
import CategoryCreate from './categories/category.create';
import AdminCreate from './adminuser/adminuser.create';
import ProductEdit from './product/product.edit';
import UserAdminEdit from './adminuser/adminuser.edit';
import CategoryEdit from './categories/category.edit';
import OrdersEdit from './orders/orders.edit';
import dataProvider from './dataProvider';
import UserIcon from '@material-ui/icons/People';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CategoryIcon from '@material-ui/icons/Category';
import Dashboard from './dashboard/dashboard.shows';

const App = () => (
	<Admin
		loginPage={MyLoginPage}
		dataProvider={dataProvider}
		authProvider={authProvider}
		dashboard={Dashboard}
	>
		{(permissions) => {
			return [
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
					list={OrdersList}
					show={OrdersShow}
					edit={OrdersEdit}
				/>,
			];
		}}
	</Admin>
);

export default App;
