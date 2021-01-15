import React, { useEffect, useContext } from 'react';
import { Layout, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../GroomerProfile/groomer.css';
import Services from '../GroomerProfile/ServicesArea';
import './GroomerPublicProfile.scss'
import { Rate } from 'antd';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';


const GroomerPublicProfile = props => {
  const pathway = props.match.params.id;
  // context state
  const { groomer } = useContext(GroomersContext);
  const { getGroomerByID } = useContext(APIContext);
  const defaulthours = "closed"

  useEffect(() => {
    getGroomerByID(pathway);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathway]);

  if (groomer) {
    const hop = groomer.hours
    const objhop = JSON.parse(hop)
    console.log(hop)
    const sunday = objhop.sunday
    const monday = objhop.monday
    const tuesday = objhop.tuesday
    const wednesday = objhop.wednseday
    const thursday = objhop.thursday
    const friday = objhop.friday
    const saturday = objhop.saturday

    return (
      <div className="groomer-public-box">
        <Layout.Content
          style={{
            background: 'white',
            width: '75%',
            margin: '20px auto',
            padding: '2%',
          }}
        >

          <div className="customer-header">
            <p className="heading">{groomer.business_name}</p>
            <div className="rating">
            <Rate />
            </div>
            <div className="avatar">
            <Avatar size={74} icon={<UserOutlined />} />
            <p> {groomer.given_name} {groomer.family_name} </p>
          </div>
          </div>
          <div className="customer-info-box">
            <div className="top-info-box">
              <div className="panel">
                <Divider style={{ borderColor: 'lightblue' }}>
                About
                </Divider>
                <div className="panel-info">
                  <p>{groomer.about}</p>
                </div>
              </div>
              <div className="panel">
                <Divider style={{ borderColor: 'lightblue' }}>Services</Divider>
                <div className="panel-info">
                  <Services />
                </div>
              </div>
            </div>
            <div className="bottom-info-box">
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
                Sunday: {sunday.open} {sunday.close}<br/>
                Monday: {sunday.open} {sunday.close}<br/>
                Tuesday: {sunday.open} {sunday.close}<br/>
                Wednesday: {sunday.open} {sunday.close}<br/>
                Thursday: {sunday.open} {sunday.close}<br/>
                Friday: {sunday.open} {sunday.close}<br/>
                Saturday: {sunday.open} {sunday.close}<br/>
                </div>
              </div>
              <button className="appt-button">Schedule Appointment</button>
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

export default GroomerPublicProfile;
