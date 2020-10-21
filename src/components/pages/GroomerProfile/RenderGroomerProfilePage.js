import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { PageHeader } from 'antd';

function RenderGroomerProfilePage(props) {
  return ReactDOM.render(
    <PageHeader
      className="site-page-header"
      title="Express Groomer"
      subTitle="This is a subtitle"
    />,
    document.getElementById('root')
  );
}
export default RenderGroomerProfilePage;
