import React from 'react';
import { TextInput, Filter } from 'react-admin';

const PostFilter = (props) => (
	<Filter {...props}>
		<TextInput label='Search' source='q' alwaysOn resettable />
	</Filter>
);

export default PostFilter;
