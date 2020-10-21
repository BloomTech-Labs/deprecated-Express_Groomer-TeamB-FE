import React from 'react';
import './groomer-nav.css';
import 'antd/dist/antd.css';

function GroomerHoverNav() {
  return (
    <div className="container">
      <div className="pop-out">
        <div className="arrow-pointer">
          <p> &gt; </p>
        </div>
        <div className="anchors">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Exmaples</a>
          <a href="#">profileList</a>
        </div>
      </div>
    </div>
  );
}

export default GroomerHoverNav;
