import React from 'react';
import { ProfileFormPO } from '../../ProfileFormPO';
import { Button, Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './groomer.css';
import Services from '../../common/ServicesArea';

const GroomerProfilePage = props => {
  const {
    userInfo,
    isRegistered,
    custInfo,
    showForm,
    toggleForm,
    updated,
    setUpdated,
  } = props;
  console.log(custInfo, userInfo);
  return (
    <div>
      {showForm ? (
        <ProfileFormPO
          info={custInfo}
          isRegistered={isRegistered}
          userInfo={userInfo}
          updated={updated}
          setUpdated={setUpdated}
        />
      ) : null}
      <Layout.Content
        style={{
          background: 'white',
          width: '75%',
          margin: '20px auto',
          padding: '10px',
        }}
      >
        <div className="avatar">
          <Avatar size={74} icon={<UserOutlined />} />
        </div>

        <div className="customer-header">
          <p className="heading">
            {' '}
            {custInfo.given_name
              ? custInfo.given_name
              : userInfo.given_name}{' '}
          </p>

          <Button type="primary" onClick={() => toggleForm()}>
            {showForm ? 'Close Form' : 'Update Profile'}
          </Button>
        </div>
        <div className="customer-info-box">
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>
              Personal Info
            </Divider>
            <div className="panel-info">
              <p>
                First Name:{' '}
                {custInfo.given_name
                  ? custInfo.given_name
                  : userInfo.given_name}
              </p>
              <p>
                Last Name:{' '}
                {custInfo.family_name
                  ? custInfo.family_name
                  : userInfo.family_name}
              </p>
              <p>Email: {userInfo.email}</p>
              <p>
                Phone Number:{' '}
                {custInfo.phone_number
                  ? custInfo.phone_number
                  : 'Update your profile'}
              </p>
            </div>
          </div>
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>Address</Divider>
            <div className="panel-info">
              <p>
                Address:{' '}
                {custInfo.address ? custInfo.address : 'Update your profile'}
              </p>
              <p>
                City: {custInfo.city ? custInfo.city : 'Update your profile'}
              </p>
              <p>
                State: {custInfo.state ? custInfo.state : 'Update your profile'}
              </p>
              <p>
                Zip Code:{' '}
                {custInfo.zip_code ? custInfo.zip_code : 'Update your profile'}
              </p>
              <p>
                Country:{' '}
                {custInfo.country ? custInfo.country : 'Update your profile'}
              </p>
            </div>
          </div>
          <div className="panel">
            <Divider style={{ borderColor: 'lightblue' }}>Services</Divider>
            <div className="panel-info">
              <p>
                <Services />
              </p>
            </div>
          </div>
        </div>
      </Layout.Content>
    </div>
  );
};

export default GroomerProfilePage;
