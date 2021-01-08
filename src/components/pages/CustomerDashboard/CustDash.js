import React from 'react';
import './cust-dash.scss';
import CustTab from './cust-tabs';

export default function CustomerDashboard() {
  return (
    <div className="tab-bar">
      <h1 className="dashboard">Dashboard</h1>
      <div id="tabs">
        <CustTab />
      </div>
    </div>
  );
}
