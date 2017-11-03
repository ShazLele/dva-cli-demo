import dva from 'dva';

export default {
	namespace:'products', //在全局state上的key
	state:[], //初始值
	reducers:{ //reducers等同于redux里的reducer,接收action,同步更新state
		'delete'(state,{payload:id}){
			return state.filter(item=>item.id!==id);
		}
	}
}

//载入model------需要在index.js载入他
//app.model(require('./models/products'));


//行为改变数据 通过dispatch发起一个action
// 同步行为会直接通过reducers改变state
// 异步行为(副作用)会先触发effects,然后流向reducers最终改变state

//type Reducer<S,A> =(state:S,action:A)=>S
// 接收两个参数:之前已经累积运算的结果 & 当前要被累积的值,返回新的累积结果
// 该函数把一个集合归并成一个单值

// reducer聚合积累的结果是当前model的state对象
// reducer必须是纯函数 返回全新数据