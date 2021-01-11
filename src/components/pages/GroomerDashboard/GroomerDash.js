import React from 'react';
import './groomer-dash.scss';
import GroomerTab from './groomer-tabs';

export default function GroomerDash() {
  return (
    <div className="tab-bar">
      <h1 className="dashboard">Dashboard</h1>
      <div id="tabs">
        <GroomerTab />
      </div>
    </div>
  );
}
