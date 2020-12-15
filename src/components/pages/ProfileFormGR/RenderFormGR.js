import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HoursSelector from './HoursSelector';
import EditService from './EditService';
import {
  Form,
  Input,
  Button,
  Alert,
  Modal,
  Layout,
  Select,
  Divider,
} from 'antd';
import 'antd/dist/antd.css';
import './form.scss';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { UsersContext } from '../../../state/contexts/UsersContext';
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { useOktaAuth } from '@okta/okta-react';

const RenderFormGR = () => {
  const { authState } = useOktaAuth();

  const history = useHistory();
  // context state
  const { userInfo, isRegistered } = useContext(UsersContext);
  const {
    updateOpenHours,
    updateCloseHours,
    hoursOfOpp,
    changeService,
    changePrice,
    addService,
    services,
    grServices,
    deleteGroomerProfile,
    groomerInfo,
    hours,
  } = useContext(GroomersContext);
  const {
    onFailed,

    setShowForm,
    resultInfo,
    showDelete,
    setShowDelete,
    setResultInfo,
  } = useContext(FormContext);
  const { postUserInfo, putUserInfo } = useContext(APIContext);
  const { Option } = Select;

  //sets up initial values from customers table when rendered
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [groomerInfo, form]);

  const onFinish = values => {
    const hoursString = JSON.stringify(hours);
    //add in user id and hours
    const infoValues = {
      user_id: userInfo.sub,
      hours: hoursString,
      ...values,
    };

    //checking isRegistered and calling the API to either create or update
    //API calls are abstracted out into the API/index file as functions and called here
    if (isRegistered === false) {
      postUserInfo(
        `${process.env.REACT_APP_API_URI}/groomers/`,
        authState,
        infoValues
      );
    } else {
      putUserInfo(
        `${process.env.REACT_APP_API_URI}/groomers/${userInfo.sub}`,
        authState,
        infoValues
      );
    }
  };

  return (
    <div>
      <Layout.Content
        style={{
          border: '1px solid black',
          width: '900px',
          padding: '20px 10px',
          background: 'white',
          position: 'absolute',
          left: '10%',
          zIndex: '2',
        }}
      >
        <Form
          labelCol={{ offset: 4, span: 15 }}
          wrapperCol={{ offset: 4, span: 15 }}
          form={form}
          layout="vertical"
          name="PoProfile"
          initialValues={groomerInfo}
          onFinish={onFinish}
          onFinishFailed={onFailed}
          size="small"
        >
          <div className="close-btn">
            <Button onClick={() => setShowForm(false)}>x</Button>
          </div>

          <div className="form-top">
            <div className="form-panel">
              <Form.Item>
                <p>Please fill out your profile information</p>
              </Form.Item>

              <Form.Item
                label="First Name"
                name="given_name"
                rules={[{ required: true }]}
                initialValue={groomerInfo.given_name}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="family_name"
                rules={[{ required: true }]}
                initialValue={groomerInfo.family_name}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Business Name"
                name="business_name"
                rules={[{ required: true }]}
                initialValue={groomerInfo.business_name}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[{ required: true }]}
                initialValue={groomerInfo.phone_number}
                type="hidden"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true }]}
                initialValue={groomerInfo.address}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true }]}
                initialValue={groomerInfo.city}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true }]}
                initialValue={groomerInfo.state}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Zip Code"
                name="zip_code"
                rules={[{ required: true }]}
                initialValue={groomerInfo.zip_code}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Country"
                name="country"
                rules={[{ required: true }]}
                initialValue={groomerInfo.country}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="About"
                name="about"
                initialValue={groomerInfo.about}
              >
                <Input.TextArea rows={6} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                <Button type="primary" htmlType="submit">
                  {isRegistered ? 'Update' : 'Submit'}
                </Button>
              </Form.Item>

              {/* Delete profile modal */}
              <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
                {isRegistered ? (
                  <Button
                    type="primary"
                    onClick={() => setShowDelete(true)}
                    danger
                  >
                    Delete Profile
                  </Button>
                ) : null}
              </Form.Item>
            </div>

            <div className="form-panel">
              <HoursSelector
                hoursOfOpp={hoursOfOpp}
                updateOpenHours={updateOpenHours}
                updateCloseHours={updateCloseHours}
              />

              <div className="services-container">
                <p>Add a service</p>
                <div>
                  <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                    <Select onChange={changeService} placeholder="Services">
                      {services.length > 0
                        ? services.map((service, index) => (
                            <Option key={index} value={service.id}>
                              {service.service_name}
                            </Option>
                          ))
                        : null}
                    </Select>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 2, span: 5 }}>
                    <Input
                      type="number"
                      placeholder="Price"
                      onChange={value => changePrice(value)}
                    />
                  </Form.Item>
                </div>
                <Button type="primary" block="true" onClick={addService}>
                  Add A Service
                </Button>
              </div>

              <Form.Item>
                {grServices.length > 0
                  ? grServices.map((service, index) => (
                      <div key={index} className="services-list">
                        <Divider
                          style={{ borderColor: ' rgba(142, 177, 217, 1)' }}
                        >
                          {service.service_name}{' '}
                        </Divider>

                        <EditService service={service} />
                      </div>
                    ))
                  : null}
              </Form.Item>
            </div>
          </div>

          {/* When form is submited this alert will show success or error message */}
          {resultInfo.message !== null ? (
            <Form.Item>
              <Alert
                message={resultInfo.message}
                type={resultInfo.type}
                showIcon
              />
            </Form.Item>
          ) : null}

          <Modal
            title="Are you sure you want to delete your profile?"
            visible={showDelete}
            onOk={() => {
              deleteGroomerProfile();
              setShowDelete(false);
            }}
            onCancel={() => setShowDelete(false)}
          >
            <Alert
              message="By selecting Ok your profile will be deleted"
              type="warning"
              showIcon
            />
          </Modal>
        </Form>
      </Layout.Content>
    </div>
  );
};

export default RenderFormGR;
