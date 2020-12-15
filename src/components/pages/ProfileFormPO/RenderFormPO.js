import React, { useContext, useEffect } from 'react';
import { Form, Input, Button, Alert, Modal, Layout } from 'antd';
import 'antd/dist/antd.css';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { FormContext } from '../../../state/contexts/FormContext';
import { CustomersContext } from '../../../state/contexts/CustomersContext';
import { useOktaAuth } from '@okta/okta-react';
import { APIContext } from '../../../state/contexts/APIContext';

const RenderFormPO = () => {
  const { authState } = useOktaAuth();

  // context state
  const { userInfo, isRegistered } = useContext(UsersContext);
  const { custInfo, deleteCustomerProfile, updated, setUpdated } = useContext(
    CustomersContext
  );
  const { resultInfo, onFailed, showDelete, setShowDelete } = useContext(
    FormContext
  );
  const { postUserInfo, putUserInfo } = useContext(APIContext);

  //sets up initial values from customers table when rendered
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [custInfo, form]);

  const onFinish = values => {
    //add in user id to values from fields
    const infoValues = {
      user_id: userInfo.sub,
      ...values,
    };

    //checking isRegistered and calling the api to either create or update
    if (isRegistered === false) {
      postUserInfo(
        `${process.env.REACT_APP_API_URI}/customers`,
        authState,
        infoValues
      );
    } else {
      putUserInfo(
        `${process.env.REACT_APP_API_URI}/customers/${userInfo.sub}`,
        authState,
        infoValues
      );
    }
    setUpdated(!updated);
  };

  return (
    <Layout.Content
      style={{
        border: '1px solid black',
        width: '500px',
        padding: '20px 10px',
        background: 'lightgray',
        position: 'absolute',
        left: '25%',
        zIndex: '2',
      }}
    >
      <Form
        labelCol={{ offset: 4, span: 15 }}
        wrapperCol={{ offset: 4, span: 15 }}
        form={form}
        layout="vertical"
        name="PoProfile"
        initialValues={custInfo}
        onFinish={onFinish}
        onFinishFailed={onFailed}
        size="small"
      >
        <Form.Item>
          <p>Please fill out your profile information</p>
        </Form.Item>

        <Form.Item
          label="First Name"
          name="given_name"
          rules={[{ required: true }]}
          initialValue={custInfo.given_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="family_name"
          rules={[{ required: true }]}
          initialValue={custInfo.family_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[{ required: true }]}
          initialValue={custInfo.phone_number}
          type="hidden"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          initialValue={custInfo.address}
        >
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city" initialValue={custInfo.city}>
          <Input />
        </Form.Item>

        <Form.Item label="State" name="state" initialValue={custInfo.state}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Zip Code"
          name="zip_code"
          initialValue={custInfo.zip_code}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          initialValue={custInfo.country}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
          <Button type="primary" htmlType="submit">
            {isRegistered ? 'Update' : 'Submit'}
          </Button>
        </Form.Item>

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

        {/* Delete profile modal */}
        <Form.Item>
          {isRegistered ? (
            <Button type="primary" onClick={() => setShowDelete(true)} danger>
              Delete Profile
            </Button>
          ) : null}
          <Modal
            title="Are you sure you want to delete your profile?"
            visible={showDelete}
            onOk={() => {
              deleteCustomerProfile(authState);
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
        </Form.Item>
      </Form>
    </Layout.Content>
  );
};

export default RenderFormPO;
