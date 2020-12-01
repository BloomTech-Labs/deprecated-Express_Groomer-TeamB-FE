import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RenderFormPO from './RenderFormPO';
//all axios call functions
import {
  deleteProfile,
  postUserInfo,
  putUserInfo,
} from '../../../api/index.js';
import { useOktaAuth } from '@okta/okta-react';

//This form needs some info passed down as props
//info from customers if available
//an isRefistered bool to determine if a user has already registered as a customer
//userInfo.sub from okta (the users id)
const FormPOContainer = props => {
  const { info, isRegistered, userInfo, updated, setUpdated } = props;

  const { authState } = useOktaAuth();
  //for result message on submiting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);
  const history = useHistory();

  const onFinish = values => {
    //add in user id to values from fields
    const infoValues = {
      user_id: userInfo.sub,
      ...values,
    };

    //checking isRegistered and calling the api to either create or update
    if (isRegistered === false) {
      postUserInfo(
        `${process.env.REACT_APP_API_URI}/customers`,
        authState,
        infoValues,
        setResultInfo,
        history
      );
    } else {
      putUserInfo(
        `${process.env.REACT_APP_API_URI}/customers/${userInfo.sub}`,
        authState,
        infoValues,
        setResultInfo
      );
    }
    setUpdated(!updated);
  };

  const onFailed = errorInfo => {
    setResultInfo({ message: 'Error: Please try again', type: 'error' });
  };

  const deleteCustomerProfile = () => {
    //API call function
    deleteProfile(authState, 'customers', userInfo, history, setResultInfo);
  };

  return (
    <RenderFormPO
      onFinish={onFinish}
      onFailed={onFailed}
      user_info={info}
      isRegistered={isRegistered}
      resultInfo={resultInfo}
      showDelete={showDelete}
      setShowDelete={setShowDelete}
      deleteCustomerProfile={deleteCustomerProfile}
    />
  );
};

export default FormPOContainer;
