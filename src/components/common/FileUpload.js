import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  console.log({ selectedFile });

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append('image', selectedFile);

    const res = await axios.post(
      'http://localhost:8000/image-upload',
      formData
    );
    console.log({ res });
  };
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};
export default FileUpload;
