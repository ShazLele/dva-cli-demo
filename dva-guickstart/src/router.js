//react-router
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Products from './routes/Products';
import AntDComponentDemo from './routes/AntDComponentDemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path='/products' exact component={Products} />
        <Route path='/antdcomponentdemo' exact component={AntDComponentDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
