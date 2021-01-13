import { Tabs } from 'antd';
import React from 'react';
import Overview from './overview';
import GroomerProfilePage from '../GroomerProfile/GroomerProfilePage';

const { TabPane } = Tabs;

class GroomerTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="0"
          tabPosition={mode}
          style={{ height: '100%', marginLeft: '5%' }}
        >
          <TabPane
            style={{ fontSize: '16px' }}
            tab={
              <span>
                <i className="fas fa-paw"></i> Overview
              </span>
            }
            key="0"
          >
            <Overview />
          </TabPane>
          <TabPane
            tab={
              <span>
                <i className="fas fa-paw"></i> My Info
              </span>
            }
            key="1"
          >
            <GroomerProfilePage />
          </TabPane>

          <TabPane
            tab={
              <span>
                <i className="fas fa-paw"></i> Payments
              </span>
            }
            key="2"
          ></TabPane>
          <TabPane
            tab={
              <span>
                <i className="fas fa-paw"></i> Appointments
              </span>
            }
            key="3"
          >
            Appointments
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default GroomerTab;
