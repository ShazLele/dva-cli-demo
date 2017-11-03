import React from 'react';
import {connect} from 'dva'; //dva里connect方法就是react-redux的connect
import ProductList from '../components/ProductList';

const Products=({dispatch,products})=>{
	function handleDelete(id){
		dispatch({
			type:'products/delete', //指定行为,如果在model外调用,需要添加namespace
			payload:id //需要传递的信息
		});
	}
	return (
		<div>
			<h2>List of Products</h2>
			<ProductList onDelete={handleDelete} products={products} />
		</div>
	);
}

// export default Products;

export default connect(({products})=>({
	products
}))(Products);


// Action是一个普通的js对象,它是改变state的唯一途径。
// 所有获得的数据,最终都会通过dispatch函数调用一个action,从而改变对应的数据
// action必须带有type属性指明具体的行为
// 如果要发起一个action需要使用dispatch函数
// dispatch是在组件connet Models以后,通过props传入的

// dispatch是一个用于触发action的函数
// action是改变state的唯一途径,但只描述行为
// dispatch则是触发行为的方式
// reducer描述如何改变数据

// dva中 connect Model的组件通过props可以访问到dispatch
// 可以调用Model中的reducer和effects



//
// const Products=(props)=>(
// 	<h2>List of Products</h2>
// );

// export default Products;