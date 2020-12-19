import React from 'react';
import { Button, Modal, Row, Col, Spin, Form, Input, Checkbox } from 'antd';

const PetFormModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [modalState, setModalState] = React.useState('Form');

  const showModal = () => {
    setVisible(true);
  };

  // this function will be used to handle form submit
  const handleOk = () => {
    setModalState('loading');
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Form
      </Button>
      <Modal
        title="Pet Information"
        visible={visible}
        onOk={handleOk}
        confirmLoading={modalState === 'loading'}
        onCancel={handleCancel}
      >
        {modalState === 'Form' ? (
          // The form
          <>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout={'vertical'}
            >
              <Form.Item
                label="Pet Name"
                name="pet_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your pets name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Breed"
                name="breed"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Color"
                name="pet_color"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="pet_gender"
                rules={[
                  {
                    required: false,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Temperment"
                name="pet_temperment"
                rules={[
                  {
                    required: false,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Special Requests"
                name="special_requests"
                rules={[
                  {
                    required: false,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Spayed / Neutered?"
                name="spay_neuter"
                checked="false"
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                label="Current on vaccines?"
                name="shots_current"
                checked="false"
              >
                <Checkbox />
              </Form.Item>
            </Form>
          </>
        ) : (
          // Loading view for use when submitted
          <>
            <Row justify={'center'} align={'center'}>
              <Spin tip="Loading..." size={'large'} />
            </Row>
          </>
        )}
      </Modal>
    </>
  );
};

export default PetFormModal;
