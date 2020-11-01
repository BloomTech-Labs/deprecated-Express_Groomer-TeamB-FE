import React, { useEffect } from 'react';
import { Form, Input, Button, Alert, Modal, Layout } from 'antd';
import 'antd/dist/antd.css';

const RenderFormPO = props => {
  const { onFinish, onFailed, user_info, isRegistered, resultInfo } = props;

  //sets up initial values from customers table when rendered
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [user_info, form]);

  return (
    <Layout.Content
      style={{
        border: '1px solid black',
        width: '500px',
        padding: '20px 10px',
        margin: '10px auto',
      }}
    >
      <Form
        labelCol={{ offset: 4, span: 15 }}
        wrapperCol={{ offset: 4, span: 15 }}
        form={form}
        layout="vertical"
        name="PoProfile"
        initialValues={user_info}
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
          initialValue={user_info.given_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="family_name"
          rules={[{ required: true }]}
          initialValue={user_info.family_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[{ required: true }]}
          initialValue={user_info.phone_number}
          type="hidden"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          initialValue={user_info.address}
        >
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city" initialValue={user_info.city}>
          <Input />
        </Form.Item>

        <Form.Item label="State" name="state" initialValue={user_info.state}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Zip Code"
          name="zip_code"
          initialValue={user_info.zip_code}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          initialValue={user_info.country}
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
            <Button
              type="primary"
              onClick={() => props.setShowDelete(true)}
              danger
            >
              Delete Profile
            </Button>
          ) : null}
          <Modal
            title="Are you sure you want to delete your profile?"
            visible={props.showDelete}
            onOk={() => {
              props.deleteProfile();
              props.setShowDelete(false);
            }}
            onCancel={() => props.setShowDelete(false)}
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
