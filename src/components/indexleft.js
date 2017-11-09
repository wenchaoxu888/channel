import React from 'react';
import { Layout, Menu } from 'antd';
import cfg from '../utils/config';

const { Sider } = Layout;
const IndexLeft = () => {
  const handleMenuClick = (e) => {
    cfg.history.push(`/${e.key}`);
  };
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" onCollapse={(collapsed, type) => { console.log(collapsed, type); }} style={{ background: '#fff' }}>
        <div className="logo" style={{ background: '#FFFFFF', padding: 0 }} />
        <Menu theme="light" mode="inline" onClick={e => handleMenuClick(e)}>
          <Menu.Item key="Datastatistics">
            <span className="nav-text" >数据统计</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">渠道推广</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">结算信息</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>

  );
};

export default IndexLeft;

