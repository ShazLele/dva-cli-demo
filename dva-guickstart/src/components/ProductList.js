//UI component

import React from 'react';
import PropTypes from 'prop-types';
import {Table,Popconfirm,Button} from 'antd';

const ProductList = ({onDelete,products}) =>{
	const columns=[
		{
			title:'Name',
			// key:'name', react需要的key,如果有唯一的dataIndex可忽略
			dataIndex:'name',
		},{
			title:'Actions',
			render:(text,record)=>{
				return (
					<Popconfirm title='Delete?' onConfirm={() => onDelete(record.id)}>
						<Button>Delete</Button>
					</Popconfirm>
				);
			}
		}
	];
	return (
		<Table dataSource={products} 
			columns={columns}
		/>
	);
};

ProductList.PropTypes={
	onDelete:PropTypes.func.isRequired,
	products:PropTypes.array.isRequired
};

export default ProductList;