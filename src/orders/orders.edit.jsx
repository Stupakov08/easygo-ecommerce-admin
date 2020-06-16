import React from 'react';
import { Edit, SimpleForm, BooleanInput } from 'react-admin';

export const OrdersEdit = (props) => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<BooleanInput label='Order processed' source='processed' />
			</SimpleForm>
		</Edit>
	);
};

export default OrdersEdit;
