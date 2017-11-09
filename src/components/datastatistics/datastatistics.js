import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Menu, Icon } from 'antd';
import Totaldata from './totaldata';


const DataStatistics = () => {
  return (
    <div>
      <h1>数据统计</h1>
      <Menu
        mode="horizontal"
      >
        <Menu.Item key="totaldata">
          总数据
        </Menu.Item>
        <Menu.Item key="channeldata">
          渠道数据
        </Menu.Item>
        <Menu.Item key="promotiondata">
          推广数据
        </Menu.Item>
      </Menu>

    </div>
  );
};


export default DataStatistics;
