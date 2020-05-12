import React from 'react';
import { Datagrid, DatagridBody, List } from 'react-admin';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const MyDatagridRow = (props) => {
	const {
		record,
		resource,
		id,
		onToggleItem,
		children,
		selected,
		basePath,
	} = props;

	return (
		<TableRow key={id}>
			<TableCell padding='none'>
				{record.status !== 'pending' && (
					<Checkbox checked={selected} onClick={() => onToggleItem(id)} />
				)}
			</TableCell>
			{React.Children.map(children, (field) => (
				<TableCell key={`${id}-${field.props.source}`}>
					{React.cloneElement(field, {
						record,
						basePath,
						resource,
					})}
				</TableCell>
			))}
		</TableRow>
	);
};

const MyDatagridBody = (props) => (
	<DatagridBody {...props} row={<MyDatagridRow />} />
);
const MyDatagrid = (props) => {
	return <Datagrid {...props} body={<MyDatagridBody />} />;
};

export default MyDatagrid;
