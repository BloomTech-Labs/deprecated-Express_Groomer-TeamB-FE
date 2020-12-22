import React, { createContext, useState } from 'react';

export const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(0);
  const [showDelModal, setShowDelModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  //for result message on submitting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);
  // context state

  // functions
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onFailed = errorInfo => {
    setResultInfo({ message: 'Error: Please try again', type: 'error' });
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
        searchValue,
        setSearchValue,
        loading,
        setLoading,
        visible,
        setVisible,
        toggleForm,
        onFailed,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
