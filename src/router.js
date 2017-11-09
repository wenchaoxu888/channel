import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, Switch } from 'dva/router';
import IndexBody from './components/indexbody';
import DataStatistics from './components/datastatistics/datastatistics';
import TotalData from './components/datastatistics/totaldata';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/spa" component={IndexBody}>
        <Route path="/datastatistics" component={DataStatistics} />
        <Route path="/totaldata" component={TotalData} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
