import React, { useEffect, useContext } from 'react';
import { Col, List, Row } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
// context imports
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';

const PublicServices = () => {
  const { authState } = useOktaAuth();

  // context state
  const { groomerServices, servicesUpdated } = useContext(
    GroomersContext
  );
  const { getGroomerServicesByID} = useContext(APIContext);

  useEffect(() => {
    getGroomerServicesByID(authState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesUpdated]);


  return (
    <List
      dataSource={groomerServices}
      renderItem={item => (
        <Row justify={'space-between'} style={{ padding: '5px' }}>
          <Col>
            {' '}
            {item.service_name} : ${item.services_price}
          </Col>
          <Col>
            <Row>
            </Row>
          </Col>
        </Row>
      )}
    />
  );
};

export default PublicServices;