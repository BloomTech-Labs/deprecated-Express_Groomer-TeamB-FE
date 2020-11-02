import React from 'react';
import { Button } from '../../common';
import HalfRating from '../../common/ratings';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';
import Services from '../../common/ServicesArea';
import Block from '../../common/textBox';

function GroomerProfilePage(props) {
  const { userInfo, authService } = props;

  return (
    <div className="container">
      <div className="top-container">
        <h1>Hi {userInfo.name} </h1>
        <HalfRating />
        <Button handleClick={() => authService()} buttonText="Edit Profile" />
        <Avatar size={75} icon={<UserOutlined />} />
      </div>
      <div className="middle-container">
        <Services />
        <Block />
      </div>
      <div className="bottom-container">
        <Button handleClick={() => authService.logout()} buttonText="Logout" />
      </div>
    </div>
  );
}
export default GroomerProfilePage;
