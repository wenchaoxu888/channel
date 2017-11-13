import React from 'react';
import { Menu } from 'antd';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import TotalData from './totaldata';
import PromotionData from './promotion';
import ChannelData from './channeldata';

const DataStatistics = () => {
  return (
    <div>
      <h2>数据统计</h2>
      <Router>
        <div>
          <Menu
            mode="horizontal"
          >
            <Menu.Item key="totaldata">
              <Link to="/datastatistics">总数据</Link>
            </Menu.Item>
            <Menu.Item key="channeldata">
              <Link to="/datastatistics/channeldata">渠道数据</Link>
            </Menu.Item>
            <Menu.Item key="promotiondata">
              <Link to="/datastatistics/promotion">推广数据</Link>
            </Menu.Item>
          </Menu>
          <div>
            <Route exact path="/datastatistics" component={TotalData} />
            <Route path="/datastatistics/channeldata" component={ChannelData} />
            <Route path="/datastatistics/promotion" component={PromotionData} />
          </div>
        </div>
      </Router>

    </div>
  );
};

export default DataStatistics;
