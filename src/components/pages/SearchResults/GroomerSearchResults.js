import React, { useState, useEffect } from 'react';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../GroomerProfile/groomer.css';
import Services from '../GroomerProfile/ServicesArea';
import { getGroomerByID } from '../../../api/index.js';

const GroomerSearchResults = props => {
  const [groomer, setGroomer] = useState();
  const pathway = props.match.params.id;

  useEffect(() => {
    getGroomerByID(pathway, setGroomer);
  }, [pathway]);

  if (groomer) {
    return (
      <div>
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
            <p className="heading"> {groomer.given_name} </p>
          </div>
          <div className="customer-info-box">
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>
                Personal Info
              </Divider>
              <div className="panel-info">
                <p>First Name: {groomer.given_name}</p>
                <p>Last Name: {groomer.family_name}</p>
                <p>Email: {groomer.email}</p>
                <p>Phone Number: {groomer.phone_number}</p>
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Address</Divider>
              <div className="panel-info">
                <p>Address: {groomer.address}</p>
                <p>City: {groomer.city}</p>
                <p>State: {groomer.state}</p>
                <p>Zip Code: {groomer.zip_code}</p>
                <p>Country: {groomer.country}</p>
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Services</Divider>
              <div className="panel-info">
                <Services />
              </div>
            </div>
          </div>
        </Layout.Content>
      </div>
    );
  } else if (!groomer) {
    return (
      <div>
        <p>Loading component..</p>
      </div>
    );
  }
};

export default GroomerSearchResults;
