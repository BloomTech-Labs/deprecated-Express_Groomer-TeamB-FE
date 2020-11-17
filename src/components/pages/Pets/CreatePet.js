import React, { useEffect } from 'react';
import { Form, Input, Button, Alert, Modal, Layout } from 'antd';
import 'antd/dist/antd.css';

const RenderPetAdditionForm = props => {
  const { onFinish, onFailed, pet_info, isREgistered, resultInfo } = props;

  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
  }, [pet_info, form]);

  return (
    <Layout.Content style={{}}>
      <Form></Form>
    </Layout.Content>
  );
};

export default RenderPetAdditionForm;
