import React from 'react';
import { ProfileFormPO } from '../../ProfileFormPO';
import { Button, Layout } from 'antd';
import 'antd/dist/antd.css';

const RenderCustPro = props => {
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
        <p>
          Hello{' '}
          {custInfo.given_name ? custInfo.given_name : userInfo.given_name}{' '}
          Welcome to Express Groomer
        </p>
        <p>Email: {userInfo.email}</p>
        <p>
          First Name:{' '}
          {custInfo.given_name ? custInfo.given_name : userInfo.given_name}
        </p>
        <p>
          Last Name:{' '}
          {custInfo.family_name ? custInfo.family_name : userInfo.family_name}
        </p>
        <p>
          Phone Number:{' '}
          {custInfo.phone_number
            ? custInfo.phone_number
            : 'Update your profile'}
        </p>
        <p>
          Address: {custInfo.address ? custInfo.address : 'Update your profile'}
        </p>
        <p>City: {custInfo.city ? custInfo.city : 'Update your profile'}</p>
        <p>State: {custInfo.state ? custInfo.state : 'Update your profile'}</p>
        <p>
          Zip Code:{' '}
          {custInfo.zip_code ? custInfo.zip_code : 'Update your profile'}
        </p>
        <p>
          Country: {custInfo.country ? custInfo.country : 'Update your profile'}
        </p>
        <Button type="primary" onClick={() => toggleForm()}>
          {showForm ? 'Close Form' : 'Update Profile'}
        </Button>
      </Layout.Content>
    </div>
  );
};

export default RenderCustPro;
