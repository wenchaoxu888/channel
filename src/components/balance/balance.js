import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: '月份',
  dataIndex: 'name',
}, {
  title: '应收金额(元)',
  className: 'column-money',
  dataIndex: 'money',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];

const Balance = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '3px' }}>结算</h2>
      <h3 style={{ marginBottom: '10px' }}>结算周期：2017年11月</h3>
      <Table
        columns={columns}
        dataSource={data}
        bordered
      />
      <div>
        <p>特别说明</p>
        <p>1.建议贵方在累计金额达到1000元左右再开具发票。</p>
        <p>2.如累计多个月份的金额一次性结算，建议贵方在发票上备注好具体结算月份及金额。</p>
        <p>3.前一个月结算单将于当月前5个工作日左右更新，建议在当月15日之前开票寄出，当月15日以后寄到的发票，延后至下月结算。</p>
        <p>4.请注意<span style={{ color: 'red' }}>应付金额即为开票金额</span>，已进行预付扣减，不必重复扣减。</p>
      </div>
    </div>
  );
};


export default Balance;
