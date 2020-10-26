import React, { useState, useEffect } from 'react';
import RenderFormPO from './RenderFormPO';
import axios from 'axios';

//I'm going to move alot of this logic into the profile page
//but needed it to test the form outside its container
const FormPOContainer = props => {
  //inital info from customers table
  const [info, setInfo] = useState({});
  //var to check if user is registered in customers table
  //used to decide if we want to create or upadte a profile
  const [isRegistered, setIsRegistered] = useState(false);
  //for result message on submiting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);

  //useEffect to call customers table and check for data
  useEffect(() => {
    axios
      .get(`http://localhost:8000/customers/${props.userInfo.sub}`)
      .then(res => {
        // console.log("cust data", res.data);
        if (res.data) {
          setInfo(res.data);
          setIsRegistered(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.userInfo.sub]);

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
          //console.log("create", res);
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
          console.log('create', res);
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

  const toggleDeleteModal = () => {
    setShowDelete(!setShowDelete);
  };

  return (
    <RenderFormPO
      onFinish={onFinish}
      onFailed={onFailed}
      user_info={info}
      isRegistered={isRegistered}
      resultInfo={resultInfo}
      showDelete={showDelete}
      toggleDeleteModal={toggleDeleteModal}
      email={props.email}
    />
  );
};

export default FormPOContainer;
