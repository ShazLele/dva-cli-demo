
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

// effect被称为副作用 同样的输入不一定获得同样的输出
// dva底层引入redux-sagas做异步流程控制 将异步转为同步 将effects转为纯函数

//subscription是一种从【源】获取数据的方法
// 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等
// 订阅数据源 然后根据条件dispatch需要的action
