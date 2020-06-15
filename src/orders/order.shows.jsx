import React from 'react';
import {
	Show,
	ImageField,
	TextField,
	DateField,
	EditButton,
	TabbedShowLayout,
	ReferenceField,
	Tab,
	TopToolbar,
	DeleteButton,
	EmailField,
	Datagrid,
	ArrayField,
	UrlField,
	FunctionField,
	BooleanField,
} from 'react-admin';

const PostShowActions = ({ permissions, basePath, data, resource }) => (
	<TopToolbar>
		<EditButton basePath={basePath} record={data} />
	</TopToolbar>
);
const OrderTitle = ({ record }) => {
	return <span>Order {record ? `"${record.orderId}"` : ''}</span>;
};

export const OrdersShow = ({ permissions, ...props }) => (
	<Show
		{...props}
		title={<OrderTitle />}
		actions={<PostShowActions permissions={permissions} />}
	>
		<TabbedShowLayout>
			<Tab label='Order Info'>
				<TextField label='Order number' source='orderId' />
				<BooleanField label='Order processed ' source='processed' />
				<DateField label='Order created' source='createdAt' />
				<EmailField source='userId.email' label={'Email'} />
				<TextField source='userId.name' label={'Name'} />
				<BooleanField source='userId.verified' label={'User Verified'} />
			</Tab>
			<Tab label='Shipping Info'>
				<TextField label='Country' source='address.country' />
				<TextField label='City' source='address.city' />
				<TextField label='Adress' source='address.address' />
				<TextField label='Zip' source='address.zip' />
			</Tab>
			<Tab label='Ordered Products'>
				<ArrayField source='cartItems' label={' '} style={{ width: '100%' }}>
					<Datagrid>
						<ImageField
							source='line.images[0].url'
							label='Image'
							className={'image-list'}
						/>
						<TextField source='line.code' label='Code' />
						<TextField
							source='line.title'
							label='Title'
							className={'title-list'}
						/>
						<FunctionField
							label='Price'
							render={(record) => `${record.line.price} ₴`}
						/>
						<TextField
							source='quantity'
							label='Quantity'
							className={'title-list'}
						/>
						<FunctionField
							label='Total'
							render={(record) => `${record.line.price * record.quantity} ₴`}
						/>
					</Datagrid>
				</ArrayField>
			</Tab>
			<Tab label='Payment Info'>
				<TextField label='Payment id' source='payment.id' />
				<FunctionField
					label='Amount'
					render={(record) => `${record.payment.amount / 100} ₴`}
				/>
				<TextField
					label='Billing email'
					source='payment.billing_details.name'
				/>
				<UrlField label='Reciept' source='payment.receipt_url' />
				<BooleanField label='Paid' source='payment.paid' />
				<TextField label='Status' source='payment.status' />
			</Tab>
		</TabbedShowLayout>
	</Show>
);

export default OrdersShow;
