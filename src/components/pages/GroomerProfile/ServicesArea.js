import React, { useEffect, useContext } from 'react';
import { List } from 'antd';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { UsersContext } from '../../../state/contexts/UsersContext';

const Services = () => {
  // context state
  const { userInfo } = useContext(UsersContext);
  const { groomerServices } = useContext(GroomersContext);
  const { getGroomerServicesByID } = useContext(APIContext);

  useEffect(() => {
    if (userInfo) {
      getGroomerServicesByID();
    }
  }, [userInfo, getGroomerServicesByID]);

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
