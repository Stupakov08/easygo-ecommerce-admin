import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';

const CategoryBulkActionButtons = (props) => (
	<Fragment>
		{/* default bulk delete action */}
		<BulkDeleteButton {...props} undoable={false} />
	</Fragment>
);

export default CategoryBulkActionButtons;
