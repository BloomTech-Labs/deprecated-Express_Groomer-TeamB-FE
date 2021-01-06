import { Tabs } from 'antd';
import React, { Component } from 'react';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const GroomerDashboard = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default { GroomerDashboard };
