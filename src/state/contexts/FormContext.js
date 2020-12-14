import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UsersContext } from './UsersContext';
import { GroomersContext } from './GroomersContext';
import { APIContext } from './APIContext';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(0);
  const [showDelModal, setShowDelModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);

  //for result message on submitting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);
  // context state
  const { userInfo, isRegistered } = useContext(UsersContext);
  const { hours } = useContext(GroomersContext);
  const { postUserInfo, putUserInfo } = useContext(APIContext);

  const history = useHistory();

  // functions
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onFailed = errorInfo => {
    setResultInfo({ message: 'Error: Please try again', type: 'error' });
  };

  const onFinish = (values, authState) => {
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
        infoValues,
        setResultInfo,
        history
      );
    } else {
      putUserInfo(
        `${process.env.REACT_APP_API_URI}/groomers/${userInfo.sub}`,
        authState,
        infoValues,
        setResultInfo
      );
    }
  };

  return (
    <FormContext.Provider
      value={{
        showForm,
        setShowForm,
        resultInfo,
        setResultInfo,
        showDelete,
        setShowDelete,
        isEditing,
        isDeleted,
        isError,
        setIsEditing,
        setIsDeleted,
        setIsError,
        newValue,
        showDelModal,
        setNewValue,
        setShowDelModal,
        toggleForm,
        onFinish,
        onFailed,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
