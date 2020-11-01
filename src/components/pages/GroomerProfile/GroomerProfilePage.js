import React, { PropTypes } from 'react';
import './index.css';
import ProfileArea from '../../common/ProfileArea';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function GroomerProfilePage(props) {
  return (
    <div className="container">
      <div className="avatar ">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <div className="profile">
        <ProfileArea
          username="Mike"
          name="Michael Jeter"
          address="Euclid Ohio"
        />
      </div>
      <div></div>
    </div>
  );
}

GroomerProfilePage.propTypes = {};
export default GroomerProfilePage;
