import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import IndexLeft from '../components/indexleft';
const { Content, Footer } = Layout;
const IndexCenter = ({ children }) => {
  console.log(children)
  return (
    <Layout >
      <IndexLeft />
      <Layout style={{ background: '#fff' }} >
        <Content>
          <div style={{ padding: 16, background: '#fff', minHeight: 460 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' ,background: '#fff' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default connect(({ auth }) => ({ auth }))(IndexCenter);
