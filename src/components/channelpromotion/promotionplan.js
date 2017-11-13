import React from 'react';
import { Modal, Button, Layout, Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const PromotionPlan = () => {
  return (
    <div>
      <CreatePromotionPlan />
      <h3 style={{marginTop: "10px"}}>渠道推广列表</h3>
      <p>
        <Input placeholder='推广计划' style={{width:'20%', marginTop: '10px',marginRight:'5px'}} />
        <Input placeholder='渠道名称' style={{width:'20%', marginTop: '10px',marginRight:'5px'}} />
        <Button type="primary">查询</Button>
      </p>
    </div>
  );
};

export default PromotionPlan;


class CreatePromotionPlan extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}  style={{ marginTop: '10px'}}>创建推广计划</Button>
        <Modal title="Title"
               visible={visible}
               onOk={this.handleOk}
               confirmLoading={confirmLoading}
               onCancel={this.handleCancel}
               width={1000}
        >
          <p>
            <Layout style={{ backgroundColor: '#fff'}}>
              <h2>创建推广计划</h2>
              <Content>
                <p ><span style={{ marginRight: '20px', width: '20%' }} >推广计划名称</span><Input placeholder="" style={{ width: '60%' }}/></p>
                <p style={{ marginTop: '10px' }}><span style={{ marginRight: '20px' ,width: '20%' }}>原始内容</span><Input placeholder="" style={{ width: '60%' }} /><Button type="primary">查询</Button></p>
              </Content>
            </Layout>
          </p>
        </Modal>
      </div>
    );
  }
}
