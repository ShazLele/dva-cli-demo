import dva from 'dva';
import './index.css';

// 1. Initialize
// const app = dva();
const app=dva({
	initialState:{
		products:[
			{name:'dva',id:1},
			{name:'antd',id:2}
		]
	}
});
// 可以通过dva的实力属性_store看到顶部的state数据
console.log(app._store); //顶部的state数据

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
