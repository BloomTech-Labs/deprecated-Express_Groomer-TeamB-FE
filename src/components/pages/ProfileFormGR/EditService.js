import React, { useEffect, useContext } from 'react';
import { Button, Input, Modal, Alert } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import 'antd/dist/antd.css';
import './form.scss';
// context imports
import { FormContext } from '../../../state/contexts/FormContext';
import { APIContext } from '../../../state/contexts/APIContext';

const EditService = props => {
  const { service } = props;
  const { authState } = useOktaAuth();
  // context state
  const {
    isEditing,
    isDeleted,
    isError,
    setIsEditing,
    newValue,
    showDelModal,
    setNewValue,
    setShowDelModal,
  } = useContext(FormContext);
  const { editGroomerServices, deleteService } = useContext(APIContext);

  useEffect(() => {
    setNewValue(service.services_price);
  }, [service, setNewValue]);

  const updateService = () => {
    const price = {
      services_price: newValue,
    };

    editGroomerServices(authState, price);
  };

  const deleteGroomerService = () => {
    deleteService(authState, service);
  };

  return (
    <div>
      {!isDeleted ? (
        <div className="services-edit">
          {isEditing ? (
            <Input
              onChange={e => setNewValue(e.target.value)}
              defaultValue={service.services_price}
            />
          ) : (
            <p>${newValue === 0 ? service.services_price : newValue}</p>
          )}

          {!isEditing ? (
            <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
          ) : (
            <Button
              onClick={() => {
                updateService();
              }}
            >
              Update
            </Button>
          )}

          <Button danger onClick={() => setShowDelModal(true)}>
            Delete
          </Button>
        </div>
      ) : (
        <div className="services-edit">
          <Alert message={`This service was deleted`} type="error" showIcon />
        </div>
      )}

      {isError ? (
        <Alert
          message={`An error occured. Please try again.`}
          type="error"
          showIcon
        />
      ) : null}
      <Modal
        title="Are you sure you want to delete your profile?"
        visible={showDelModal}
        onOk={() => {
          deleteGroomerService();
        }}
        onCancel={() => {
          setShowDelModal(false);
        }}
      >
        <Alert
          message={`${service.service_name} service will be deleted`}
          type="warning"
          showIcon
        />
      </Modal>
    </div>
  );
};

export default EditService;
