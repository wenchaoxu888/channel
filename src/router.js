import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, } from 'dva/router';
import Login from './components/login';
import IndexCenter from './components/indexcenter';
import DataStatistics from './components/datastatistics/datastatistics';

const RouterConfig = ({ history }) =>
  <Router history={history}>
    <div>
      <Route path="/" component={Login} />
      <Route path="/datastatistics" component={DataStatistics} />
    </div>
  </Router>

export default RouterConfig;

