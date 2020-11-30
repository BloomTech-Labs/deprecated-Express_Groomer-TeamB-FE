import React, { useState, useEffect } from 'react';
import { Button, Input, Modal, Alert } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { editGroomerServices, deleteService } from '../../../api/index.js';
import 'antd/dist/antd.css';
import './form.scss';

const EditService = props => {
  const { service, userInfo } = props;
  const { authState } = useOktaAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(0);
  const [showDelModal, setShowDelModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setNewValue(service.services_price);
  }, [service]);

  const updateService = () => {
    const price = {
      services_price: newValue,
    };

    editGroomerServices(
      authState,
      userInfo,
      service,
      price,
      setIsEditing,
      isEditing,
      setIsError
    );
  };

  const deleteGroomerService = () => {
    deleteService(
      authState,
      userInfo,
      service,
      setIsDeleted,
      setShowDelModal,
      setIsError
    );
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
