import React, { useContext } from 'react';
import { Button, Modal, Row, Spin, Form, Input, Checkbox } from 'antd';
import { FormContext } from '../../../state/contexts/FormContext';

const PetFormModal = () => {
  // context state
  const {
    modalState,
    visible,
    setVisible,
    onPetFormSubmit,
    onPetFormFinishFailed,
  } = useContext(FormContext);

  // modal specific functions
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Pet
      </Button>
      <Modal
        okButtonProps={{ form: 'pet-form', key: 'submit', htmlType: 'submit' }}
        title="Pet Information"
        visible={visible}
        confirmLoading={modalState === 'loading'}
        onCancel={handleCancel}
      >
        {modalState === 'Form' ? (
          // The form
          <>
            <Form
              id={'pet-form'}
              name="basic"
              initialValues={{
                shots_current: false,
                spay_neuter: false,
              }}
              onFinish={onPetFormSubmit}
              onFinishFailed={onPetFormFinishFailed}
              layout={'vertical'}
            >
              <Form.Item
                label="Pet Name"
                name="pet_name"
                rules={[
                  {
                    required: true,
                    message: 'Pet name is required',
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
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Temperament"
                name="pet_temperament"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Additional Notes"
                name="special_requests"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Spayed / Neutered?"
                name="spay_neuter"
                checked="false"
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>

              <Form.Item
                label="Current on vaccines?"
                name="shots_current"
                checked="false"
                valuePropName="checked"
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
