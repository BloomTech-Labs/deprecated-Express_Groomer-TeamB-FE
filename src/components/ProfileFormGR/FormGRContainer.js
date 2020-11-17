import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RenderFormGR from './RenderFormGR';
import axios from 'axios';

//place this component at the top of the groomer page
//to conditionaly render on a button click
//will need to pass render function down and add a way
//to close the form.

const FormGRContainer = props => {
  const { userInfo, isRegistered, groomerInfo, setShowForm } = props;

  //for result message on submiting form
  const [resultInfo, setResultInfo] = useState({ message: null, type: null });
  //for delete modal
  const [showDelete, setShowDelete] = useState(false);
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

  //props to abstract out to groomer profile
  //const [groomerInfo, setGroomerInfo] = useState([]);
  //const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    //abstract out if possible
    //grabbing groomer info if there is some and setting isRegistered if so
    if (userInfo) {
      //   axios
      //     .get(`${process.env.REACT_APP_API_URI}/groomers/${userInfo.sub}`)
      //     .then(res => {
      //       if (res.data) {
      //         setGroomerInfo(res.data);
      //         setIsRegistered(true);
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });

      axios
        .get(
          `${process.env.REACT_APP_API_URI}/groomer_services/${userInfo.sub}`
        )
        .then(res => {
          setGrServices(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    axios
      .get(`${process.env.REACT_APP_API_URI}/services`)
      .then(res => {
        setServices(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userInfo]);

  useEffect(() => {
    if (groomerInfo.hours) {
      setHoursOfOpp(JSON.parse(groomerInfo.hours));
      setHours(JSON.parse(groomerInfo.hours));
    }
  }, [groomerInfo.hours]);

  const onFinish = values => {
    const hoursString = JSON.stringify(hours);
    //add in user id and hours
    const infoValues = {
      user_id: userInfo.sub,
      hours: hoursString,
      ...values,
    };

    //checking isRegistered and calling the api to either create or update

    if (isRegistered === false) {
      axios
        .post(`${process.env.REACT_APP_API_URI}/groomers/`, infoValues)
        .then(res => {
          setResultInfo({
            message: `${res.data.message} You will be redirected shortly`,
            type: 'success',
          });
          setTimeout(() => {
            history.go(0);
          }, 4000);
        })
        .catch(err => {
          setResultInfo({ message: err.message, type: 'error' });
        });
    } else {
      axios
        .put(
          `${process.env.REACT_APP_API_URI}/groomers/${userInfo.sub}`,
          infoValues
        )
        .then(res => {
          setResultInfo({ message: res.data.message, type: 'success' });
        })
        .catch(err => {
          setResultInfo({ message: err.message, type: 'error' });
        });
    }
  };

  const deleteProfile = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URI}/groomers/${userInfo.sub}`)
      .then(res => {
        history.push('/login');
      })
      .catch(err => {
        setResultInfo({ message: err.message, type: 'error' });
      });
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

  const addService = () => {
    const serviceValues = {
      groomer_id: userInfo.sub,
      services_id: serviceToAdd,
      services_price: priceToAdd,
    };
    axios
      .post(`${process.env.REACT_APP_API_URI}/groomer_services/`, serviceValues)
      .then(res => {
        setResultInfo({
          message: `${res.data.message}`,
          type: 'success',
        });
      })
      .catch(err => {
        setResultInfo({ message: err.message, type: 'error' });
      });
  };

  return (
    <RenderFormGR
      userInfo={userInfo}
      onFinish={onFinish}
      groomerInfo={groomerInfo}
      isRegistered={isRegistered}
      resultInfo={resultInfo}
      showDelete={showDelete}
      setShowDelete={setShowDelete}
      deleteProfile={deleteProfile}
      updateOpenHours={updateOpenHours}
      updateCloseHours={updateCloseHours}
      hoursOfOpp={hoursOfOpp}
      changeService={changeService}
      changePrice={changePrice}
      addService={addService}
      services={services}
      grServices={grServices}
      setShowForm={setShowForm}
    />
  );
};

export default FormGRContainer;
