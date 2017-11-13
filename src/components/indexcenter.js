import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import IndexHeader from '../components/indexheader';
import { Link, HashRouter as Router, Route  } from 'react-router-dom';
import DataStatistics from './datastatistics/datastatistics';
import Channelpromotion from './channelpromotion/channelpromotion';
import Balance from  './balance/balance';
import axios from 'axios';

// 登陆账号的请求

const { Content, Footer, Sider } = Layout;
const IndexCenter = () => {

  return (
    <Router>
      <div>
        <IndexHeader />
        <Layout >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            style={{ backgroundColor: '#fff' }}
          >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['3']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">
                  <Link to="/datastatistics/datastatistics">数据统计</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">
                  <Link to="/datastatistics/channelpromotion">渠道推广</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">
                  <Link to="/datastatistics/balance">结算信息</Link>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0', background: '#fff' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Route exact path="/datastatistics/datastatistics" component={DataStatistics} />
                <Route path="/datastatistics/channelpromotion" component={Channelpromotion} />
                <Route path="/datastatistics/balance" component={Balance} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              haimaqingfan ©2017 channel And promotion
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default connect(({ auth }) => ({ auth }))(IndexCenter);
