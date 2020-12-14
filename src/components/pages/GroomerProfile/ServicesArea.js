import React, { useState, useEffect, useContext } from 'react';
import { List } from 'antd';
import { getGroomerServicesByID } from '../../../api';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';

const Services = props => {
  const { userInfo } = props;
  // context state
  const { groomerServices, setGroomerServices } = useContext(GroomersContext);

  useEffect(() => {
    if (userInfo) {
      getGroomerServicesByID(userInfo, setGroomerServices);
    }
  }, [userInfo]);

  return (
    <div>
      <List
        dataSource={groomerServices}
        renderItem={item => (
          <List.Item>
            {item.service_name} : ${item.services_price}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Services;
