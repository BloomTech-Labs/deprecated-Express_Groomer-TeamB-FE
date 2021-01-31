import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import './FileUpload.css';
import { useOktaAuth } from '@okta/okta-react';

const FileUpload = ({ uploadUrl }) => {
  const { authState } = useOktaAuth();
  const [selectedFile, setSelectedFile] = useState();

  const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
  };

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const headers = getAuthHeader(authState);

    const formData = new FormData();
    // setting the data to image because the server expects an 'image'
    formData.append('image', selectedFile);

    const res = await axios.post(
      `${process.env.REACT_APP_API_URI}/${uploadUrl}`,
      formData,
      {
        headers,
      }
    );
    console.log({ res });
  };
  return (
    <div className={'upload-form'}>
      <input
        className={'upload-input'}
        id={'upload'}
        type="file"
        name="file"
        onChange={changeHandler}
      />
      <div>
        <Button
          className={'submit-button'}
          type={'primary'}
          onClick={handleSubmission}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default FileUpload;
