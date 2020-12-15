import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RenderFormPO from './RenderFormPO';

//This form needs some info passed down as props
//info from customers if available
//an isRegistered bool to determine if a user has already registered as a
// customer
//userInfo.sub from okta (the users id)
const FormPOContainer = () => {
  return <RenderFormPO />;
};

export default FormPOContainer;
