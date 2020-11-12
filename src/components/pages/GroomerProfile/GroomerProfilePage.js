import React, { PropTypes } from 'react';
import './index.css';
import ProfileArea from '../../common/ProfileArea';

function GroomerProfilePage(props) {
  return (
    <div>
      <ProfileArea username="Mike" emailaddress="mjeter45@yahoo.com" />
    </div>
  );
}

GroomerProfilePage.ropTypes = {};
export default GroomerProfilePage;
