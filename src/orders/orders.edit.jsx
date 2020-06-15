import React, { useEffect, useState } from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	BooleanInput,
	useDataProvider,
	Loading,
	Error,
} from 'react-admin';

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
