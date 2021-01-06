import { Alert, Row, Tabs } from 'antd';
import React, { useContext, useState } from 'react';
import Overview from './overview';
import CustomerProfilePage from '../CustomerProfile/CustProContainer';
import { ProfileFormPO } from '../ProfileFormPO';
import { PetForm } from '../PetForm';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';

const { TabPane } = Tabs;

const CustTab = () => {
  const [mode] = useState('left');
  // context state
  const { resultInfo } = useContext(FormContext);

  return (
    <div>
      <Tabs
        defaultActiveKey="0"
        tabPosition={mode}
        style={{ height: '100%', marginLeft: '5%' }}
      >
        <TabPane
          style={{ fontSize: '16px' }}
          tab={
            <span>
              <i className="fas fa-paw"></i> Overview
            </span>
          }
          key="0"
        >
          <Overview />
        </TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i>
              My Info
            </span>
          }
          key="1"
        >
          <Row justify={'center'}>
            <ProfileFormPO />
          </Row>
          <Row justify={'center'} style={{ height: '60px' }}>
            {resultInfo.message !== null ? (
              <Alert
                message={resultInfo.message}
                type={resultInfo.type}
                showIcon
                style={{ marginTop: '20px', height: '40px' }}
              />
            ) : null}
          </Row>
          <CustomerProfilePage />
        </TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> My Pets
            </span>
          }
          key="2"
        >
          {/* Pet form is placed inside a row component for easy center
             alignment*/}
          <Row justify={'center'}>
            <PetForm />
          </Row>
        </TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Appointments
            </span>
          }
          key="3"
        >
          Appointments
        </TabPane>
        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Search Groomers
            </span>
          }
          key="4"
        >
          Search Groomers
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CustTab;
