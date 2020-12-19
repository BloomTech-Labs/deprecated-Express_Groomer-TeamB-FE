import React, { useEffect, useContext } from 'react';
import RenderFormGR from './RenderFormGR';
// context imports
import { UsersContext } from '../../../state/contexts/UsersContext';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';

const FormGRContainer = () => {
  // context state
  const { userInfo } = useContext(UsersContext);
  const { groomerInfo, setHours, setHoursOfOpp } = useContext(GroomersContext);
  const { getGroomerServicesByID, getGroomerServices } = useContext(APIContext);

  useEffect(() => {
    if (userInfo) {
      getGroomerServicesByID();
    }
    getGroomerServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  useEffect(() => {
    if (groomerInfo.hours) {
      setHoursOfOpp(JSON.parse(groomerInfo.hours));
      setHours(JSON.parse(groomerInfo.hours));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groomerInfo.hours]);

  return <RenderFormGR />;
};

export default FormGRContainer;
