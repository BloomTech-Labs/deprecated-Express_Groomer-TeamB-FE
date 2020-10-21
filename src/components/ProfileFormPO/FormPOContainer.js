import React from 'react';
import RenderFormPO from './RenderFormPO';

const FormPOContainer = props => {
  const onFinish = values => {
    console.log(values);
  };
  const onFailed = errorInfo => {
    console.log(errorInfo);
  };

  return (
    <RenderFormPO
      onFinish={onFinish}
      onFailed={onFailed}
      userInfo={props.userInfo}
    />
  );
};

export default FormPOContainer;
