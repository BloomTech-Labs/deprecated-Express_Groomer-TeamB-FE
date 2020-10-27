import PropTypes from 'prop-types';
import React from 'react';

function ProfileArea(props) {
  return (
    <div>
      <h1>Profile for {props.username}</h1>
      <h2>User Info</h2>
      <h3>Name: {props.name}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

ProfileArea.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default ProfileArea;
