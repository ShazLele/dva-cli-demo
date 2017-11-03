import React from 'react';
import PropTypes from 'prop-types';
import  { Button,Icon} from 'antd';

const General=() =>{
	return (
		<div>
			<Button loading={{delay:2}} type='danger' ></Button>
			<Button type='primary' size='large' icon='rocket'>按钮</Button>
			<Icon type='link' />
			<Icon type='smile' spin={true} style={{fontSize:24,color:'red'}}/>
		</div>
	)
}

General.PropTypes={

};

export default General;