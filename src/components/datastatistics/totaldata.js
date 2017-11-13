import React from 'react';
import { Row, Col, Button, Table } from 'antd';
import axios from 'axios';

const urls = 'http://csapi.haimaqingfan.com//dtbt/statis/getRechargeAmount'
axios({
  method: 'get',
  url: urls,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  params: {
    time: 1,
  },
});

const totaldata = [{
  title: '日期',
  dataIndex: '1',
  key: 'name',
}, {
  title: '充值金额（分成前）',
  dataIndex: '1',
  key: 'age',
}, {
  title: '充值用户',
  dataIndex: '1',
  key: 'address',
}];


const TotalData = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="gutter-example">
        <Row gutter={16} style={{ margin: '10px' }}>
          <Col className="gutter-row" span={6} style={{ height: '93px' }}>
            <div className="gutter-box" style={{ padding: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', }}>
              <div style={{ color: 'red', fontSize: '25px' }}>¥0</div>
              <div>今日充值金额</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6} style={{ height: '93px' }}>
            <div className="gutter-box" style={{ padding: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', }}>
              <div style={{ color: 'red', fontSize: '25px' }}>¥0</div>
              <div>今日充值金额</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6} style={{ height: '93px' }}>
            <div className="gutter-box" style={{ padding: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', }}>
              <div style={{ color: 'red', fontSize: '25px' }}>¥0</div>
              <div>今日充值金额</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6} style={{ height: '93px' }}>
            <div className="gutter-box" style={{ padding: '10px', borderStyle: 'solid', borderWidth: '1px', borderColor: '#ccc', }}>
              <div style={{ color: 'red', fontSize: '25px' }}>¥0</div>
              <div>今日充值金额</div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{textAlign: 'left', marginLeft: '15px' }}>
        <p>上月分成前流水（税前）：<span style={{ color: 'red' }}>¥:0</span></p>
        <p>上月分成后流水（税前）：<span style={{ color: 'red' }}>¥:0</span></p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button type="primary" >导出</Button>
      </div>
      <div>
        <Table style={{ marginTop: '10px' }} columns={totaldata}  />
      </div>
    </div>
  );
};

export default TotalData;
