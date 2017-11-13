import React from 'react';
import { Menu } from 'antd';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import PromotionPlan from './promotionplan';
import ChannelManagement from './channelmanagement';

const ChannelPromotion = () => {
  return (
    <div>
      <h2>渠道推广</h2>
      <Router>
        <div>
          <Menu
            mode="horizontal"
          >
            <Menu.Item key="channeldata">
              <Link to="/channelpromotion">渠道管理</Link>
            </Menu.Item>
            <Menu.Item key="promotiondata">
              <Link to="/channelpromotion/promotionplan">推广计划</Link>
            </Menu.Item>
          </Menu>
          <div>
            <Route exact path="/channelpromotion" component={ChannelManagement} />
            <Route path="/channelpromotion/promotionplan" component={PromotionPlan} />
          </div>
        </div>
      </Router>
    </div>

  );
};

export default ChannelPromotion;
