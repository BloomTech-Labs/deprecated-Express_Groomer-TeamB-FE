import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
// context imports
import { UsersContext } from './UsersContext';
import { APIContext } from './APIContext';
import { FormContext } from './FormContext';

export const GroomersContext = createContext({});

const GroomersProvider = ({ children }) => {
  const [groomer, setGroomer] = useState();
  const [groomerInfo, setGroomerInfo] = useState({});
  const [allGroomers, setAllGroomers] = useState();
  const [filteredGroomers, setFilteredGroomers] = useState([]);
  const [groomerServices, setGroomerServices] = useState([]);
  // context state
  const { userInfo } = useContext(UsersContext);
  const { deleteProfile, postGroomerServices } = useContext(APIContext);
  const { setResultInfo } = useContext(FormContext);

  const history = useHistory();
  //hours
  const hoursTemp = {
    sunday: { open: '12:00 AM', close: '12:00 AM' },
    monday: { open: '12:00 AM', close: '12:00 AM' },
    tuesday: { open: '12:00 AM', close: '12:00 AM' },
    wednesday: { open: '12:00 AM', close: '12:00 AM' },
    thursday: { open: '12:00 AM', close: '12:00 AM' },
    friday: { open: '12:00 AM', close: '12:00 AM' },
    saturday: { open: '12:00 AM', close: '12:00 AM' },
  };
  const [hoursOfOpp, setHoursOfOpp] = useState(hoursTemp);
  const [hours, setHours] = useState(hoursTemp);

  //services
  const [services, setServices] = useState({});
  const [grServices, setGrServices] = useState([]);

  //for adding a service
  const [serviceToAdd, setServiceToAdd] = useState('');
  const [priceToAdd, setPriceToAdd] = useState(0);

  const deleteGroomerProfile = authState => {
    deleteProfile(authState, 'groomers', userInfo, history, setResultInfo);
  };

  //updating open hours by day
  const updateOpenHours = (day, value) => {
    switch (day) {
      case 'sunday':
        setHours({
          ...hours,
          sunday: { ...hours.sunday, open: value },
        });
        break;
      case 'monday':
        setHours({
          ...hours,
          monday: { ...hours.sunday, open: value },
        });
        break;
      case 'tuesday':
        setHours({
          ...hours,
          tuesday: { ...hours.sunday, open: value },
        });
        break;
      case 'wednesday':
        setHours({
          ...hours,
          wednesday: { ...hours.sunday, open: value },
        });
        break;
      case 'thursday':
        setHours({
          ...hours,
          thursday: { ...hours.sunday, open: value },
        });
        break;
      case 'friday':
        setHours({
          ...hours,
          friday: { ...hours.sunday, open: value },
        });
        break;
      case 'saturday':
        setHours({
          ...hours,
          saturday: { ...hours.sunday, open: value },
        });
        break;
      default:
        setHours({ ...hours });
    }
  };

  //updating closed hours by day
  const updateCloseHours = (day, value) => {
    switch (day) {
      case 'sunday':
        setHours({
          ...hours,
          sunday: { ...hours.sunday, close: value },
        });
        break;
      case 'monday':
        setHours({
          ...hours,
          monday: { ...hours.sunday, close: value },
        });
        break;
      case 'tuesday':
        setHours({
          ...hours,
          tuesday: { ...hours.sunday, close: value },
        });
        break;
      case 'wednesday':
        setHours({
          ...hours,
          wednesday: { ...hours.sunday, close: value },
        });
        break;
      case 'thursday':
        setHours({
          ...hours,
          thursday: { ...hours.sunday, close: value },
        });
        break;
      case 'friday':
        setHours({
          ...hours,
          friday: { ...hours.sunday, close: value },
        });
        break;
      case 'saturday':
        setHours({
          ...hours,
          saturday: { ...hours.sunday, close: value },
        });
        break;
      default:
        setHours({ ...hours });
    }
  };

  const changeService = value => {
    setServiceToAdd(value);
  };

  const changePrice = event => {
    setPriceToAdd(event.target.value);
  };

  const addService = authState => {
    const serviceValues = {
      groomer_id: userInfo.sub,
      services_id: serviceToAdd,
      services_price: priceToAdd,
    };
    postGroomerServices(
      `${process.env.REACT_APP_API_URI}/groomer_services/`,
      authState,
      serviceValues,
      setResultInfo
    );
  };

  return (
    <GroomersContext.Provider
      value={{
        groomer,
        setGroomer,
        groomerInfo,
        setGroomerInfo,
        allGroomers,
        setAllGroomers,
        filteredGroomers,
        setFilteredGroomers,
        groomerServices,
        setGroomerServices,
        hours,
        hoursOfOpp,
        hoursTemp,
        setHours,
        setHoursOfOpp,
        services,
        setServices,
        grServices,
        setGrServices,
        serviceToAdd,
        setServiceToAdd,
        priceToAdd,
        addService,
        changePrice,
        changeService,
        updateCloseHours,
        updateOpenHours,
        deleteGroomerProfile,
      }}
    >
      {children}
    </GroomersContext.Provider>
  );
};

export default GroomersProvider;
