import React, { useEffect, useContext } from 'react';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../GroomerProfile/groomer.css';
import Services from '../GroomerProfile/ServicesArea';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';

const GroomerSearchResults = props => {
  const pathway = props.match.params.id;
  // context state
  const { groomer } = useContext(GroomersContext);
  const { getGroomerByID } = useContext(APIContext);

  useEffect(() => {
    getGroomerByID(pathway);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <div className="customer-header">
            <p className="heading"> {groomer.given_name} </p>
            <div className="rating">
              <h1>THIS WILL BE RATING</h1>
            </div>
            <div className="avatar">
            <Avatar size={74} icon={<UserOutlined />} />
          </div>
          </div>
          <div className="customer-info-box">
            <div></div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>
              About
              </Divider>
              <div className="panel-info">
                <p>This will be about me section</p>
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Services</Divider>
              <div className="panel-info">
                <Services />
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>Location</Divider>
              <div className="panel-info">
                <p>Address: {groomer.address}</p>
                <p>City: {groomer.city}</p>
                <p>State: {groomer.state}</p>
                <p>Zip Code: {groomer.zip_code}</p>
                <p>Country: {groomer.country}</p>
              </div>
            </div>
            <div className="panel">
              <Divider style={{ borderColor: 'lightblue' }}>
              Hours
              </Divider>
              <div className="panel-info">
                <p>Hours will go here</p>
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
