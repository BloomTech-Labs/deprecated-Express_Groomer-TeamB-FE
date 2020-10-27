import PropTypes from 'prop-types';
import React from 'react';

function ProfileArea(props) {
  return (
    <div>
      <h1>Profile for {props.username}</h1>
      <ul>
        <li>Email address: {props.emailaddress}</li>
      </ul>
    </div>
  );
}

ProfileArea.propTypes = {
  username: PropTypes.string.isRequired,
  emailaddress: PropTypes.string.isRequired,
};

export default ProfileArea;
