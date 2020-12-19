import React from 'react';
import { Button, Modal, Row, Spin } from 'antd';

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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Form
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={modalState === 'loading'}
        onCancel={handleCancel}
      >
        {modalState === 'Form' ? (
          // The form
          <></>
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
