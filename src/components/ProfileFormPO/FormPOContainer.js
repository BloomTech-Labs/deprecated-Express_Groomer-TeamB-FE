import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RenderFormPO from './RenderFormPO';
import axios from 'axios';

//This form needs some info passed down as props
//info from customers if available
//an isRefistered bool to determine if a user has already registered as a customer
//userInfo.sub from okta (the users id)
const FormPOContainer = props => {
  const { info, isRegistered, userInfo } = props;

  //for result message on submiting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);
  const history = useHistory();

  const onFinish = values => {
    //add in user id to values from fields
    values = {
      user_id: props.userInfo.sub,
      ...values,
    };

    //checking isRegistered and calling the api to either create or update

    console.log('form values', values);
    if (isRegistered === false) {
      axios
        .post(`http://localhost:8000/customers/`, values)
        .then(res => {
          setResultInfo({ message: res.data.message, type: 'success' });
        })
        .catch(err => {
          console.log(err);
          setResultInfo({ message: err.message, type: 'error' });
        });
    } else {
      axios
        .put(`http://localhost:8000/customers/${props.userInfo.sub}`, values)
        .then(res => {
          setResultInfo({ message: res.data.message, type: 'success' });
        })
        .catch(err => {
          console.log(err);
          setResultInfo({ message: err.message, type: 'error' });
        });
    }
  };

  const onFailed = errorInfo => {
    console.log(errorInfo);
  };

  const deleteProfile = () => {
    axios
      .delete(`http://localhost:8000/customers//${userInfo.sub}`)
      .then(res => {
        history.push('/login');
      })
      .catch(err => {
        console.log(err);
        setResultInfo({ message: err.message, type: 'error' });
      });
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
      deleteProfile={deleteProfile}
    />
  );
};

export default FormPOContainer;
