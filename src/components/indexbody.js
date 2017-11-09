import React from 'react';

import 'antd/dist/antd.css';
import IndexCenter from '../components/indexcenter';
import IndexHeader from '../components/indexheader';

const IndexBody = () => {
  return (
    <div>
      <IndexHeader/>
      <IndexCenter/>
    </div>
  );
};

export default IndexBody;
