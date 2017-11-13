import React from 'react';
import { Modal, Button, Input, Table, Icon } from 'antd';
import axios from 'axios';

axios.get('http://csapi.haimaqingfan.com/dtbt/statis/getRechargeAmount', {
  time: '1',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const ChannelManagement = () => {
  return (
    <div>
      <CreateChannel />
      <p style={{ marginTop: '15px' }}>说明：所建渠道是指推广面向的营销平台，比如微信、微博、合作方自有平台等</p>

    </div>
  );
};

export default ChannelManagement;

class CreateChannel extends React.Component {
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ marginTop: '15px' }}>
          创建渠道
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <p><Input placeholder="创建渠道" style={{ width: '100%', marginRight: '10px' }} /></p>
        </Modal>
      </div>
    );
  }
}
