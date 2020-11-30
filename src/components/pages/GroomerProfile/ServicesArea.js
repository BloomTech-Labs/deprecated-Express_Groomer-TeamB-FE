import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { getGroomerServicesByID } from '../../../api/index.js';

const Services = props => {
  const { userInfo } = props;

  const [groomerServices, setGroomerServices] = useState([]);

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
