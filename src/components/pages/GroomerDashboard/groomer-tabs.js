import React, { useContext, useState } from 'react';
import { Alert, Col, Form, Row, Tabs } from 'antd';
import Overview from './overview';
import GroomerProfilePage from '../GroomerProfile/GroomerProfilePage';
import RenderFormGR from '../ProfileFormGR/RenderFormGR';
import './groomer-dash.scss';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
import FileUpload from '../../common/FileUpload';

const { TabPane } = Tabs;

const GroomerTab = () => {
  const { resultInfo } = useContext(FormContext);
  const [mode] = useState('left');

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
              <i className="fas fa-paw"></i> My Info
            </span>
          }
          key="1"
        >
          <Row justify={'center'}>
            <Col>
              <RenderFormGR />
            </Col>
            <Col>
              <FileUpload />
            </Col>
          </Row>
          <Row justify={'center'} className={'alert-row'}>
            {resultInfo.message !== null ? (
              <Form.Item>
                <Alert
                  message={resultInfo.message}
                  type={resultInfo.type}
                  showIcon
                  className={'alert'}
                />
              </Form.Item>
            ) : null}
          </Row>
          <GroomerProfilePage />
        </TabPane>

        <TabPane
          tab={
            <span>
              <i className="fas fa-paw"></i> Payments
            </span>
          }
          key="2"
        ></TabPane>
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
      </Tabs>
    </div>
  );
};

export default GroomerTab;
