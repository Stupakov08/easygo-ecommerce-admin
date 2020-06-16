import React from 'react';
import { TextInput, Filter } from 'react-admin';

const UserFilter = (props) => (
	<Filter {...props}>
		<TextInput label='Search' source='q' alwaysOn resettable />
	</Filter>
);

export default UserFilter;
