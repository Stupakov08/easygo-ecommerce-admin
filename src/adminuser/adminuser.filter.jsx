import React from 'react';
import { Create, Edit, SimpleForm, TextInput, Filter } from 'react-admin';

const AdminUserFilter = (props) => (
	<Filter {...props}>
		<TextInput label='Search' source='q' alwaysOn resettable />
	</Filter>
);

export default AdminUserFilter;