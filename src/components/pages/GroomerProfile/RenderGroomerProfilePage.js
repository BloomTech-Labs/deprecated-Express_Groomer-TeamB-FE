import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Descriptions } from 'antd';

function RenderGroomerProfilePage(props) {
  return ReactDOM.render(
    <Descriptions title="User Info" layout="vertical">
      <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
      <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
      <Descriptions.Item label="Address" span={2}>
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </Descriptions.Item>
      <Descriptions.Item label="Remark">empty</Descriptions.Item>
    </Descriptions>,
    document.getElementById('root')
  );
}
export default RenderGroomerProfilePage;
