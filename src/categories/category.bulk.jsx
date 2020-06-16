import React, { Fragment } from 'react';
import { BulkDeleteButton } from 'react-admin';

const CategoryBulkActionButtons = (props) => (
	<Fragment>
		{/* default bulk delete action */}
		<BulkDeleteButton {...props} undoable={false} />
	</Fragment>
);

export default CategoryBulkActionButtons;
