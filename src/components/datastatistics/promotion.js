import React from 'react';
import { Input, Button, Table } from 'antd';

const promotion = [{
  title: '日期',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '推广计划',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '渠道ID',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '渠道名称',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '充值用户',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '充值金额',
  dataIndex: 'address',
  key: 'address',
}];

const PromotionData = () => {
  return (
    <div>
      <div style={{ marginTop: '10px', display: 'fixed' }}>
        <Input placeholder="推广计划选择" style={{ width: '20%' ,marginRight: '10px' }} />
        <Input placeholder="渠道名称" style={{ width: '20%' ,marginRight: '10px' }} />
        <Button type="primary" style={{ marginRight: '10px' }}>查询</Button>
        <Button type="primary" style={{ marginRight: '10px' }}>导出</Button>
      </div>
      <Table style={{ marginTop: '10px' }} columns={promotion}  />
    </div>
  );
};

export default PromotionData;
