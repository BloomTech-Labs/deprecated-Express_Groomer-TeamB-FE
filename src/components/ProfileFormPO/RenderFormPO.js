import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const RenderFormPO = props => {
  const { onFinish, onFailed } = props;
  const layout = {
    labelCol: { offset: 4, span: 4 },
    wrapperCol: { offset: 4, span: 8 },
  };
  const endLayout = {
    wrapperCol: { offset: 4, span: 8 },
  };
  console.log(props.userInfo);
  return (
    <div>
      <Form
        {...layout}
        layout="vertical"
        name="PoProfile"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFailed}
      >
        <Form.Item
          label="First Name"
          name="given_name"
          rules={[{ required: true }]}
          initialValue={props.userInfo.given_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="family_name"
          rules={[{ required: true }]}
          initialValue={props.userInfo.family_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone_number"
          rules={[{ required: true }]}
          initialValue={props.userInfo.phone_number}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          initialValue={props.userInfo.address}
        >
          <Input />
        </Form.Item>

        <Form.Item label="City" name="city" initialValue={props.userInfo.city}>
          <Input />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          initialValue={props.userInfo.state}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Zip Code"
          name="zip_code"
          initialValue={props.userInfo.zip_code}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          initialValue={props.userInfo.country}
        >
          <Input />
        </Form.Item>

        <Form.Item {...endLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RenderFormPO;
