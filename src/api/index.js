import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

//example of non-auth API call function
const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

//resusable GET functions (auth not required)
const getGroomerServicesByID = (userInfo, setStateVar) => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/groomer_services/${userInfo.sub}`)
    .then(res => {
      setStateVar(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

const getGroomerServices = setStateVar => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/groomer_services`)
    .then(res => {
      setStateVar(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const apiAuthGet = authHeader => {
  return axios.get(`${apiUrl}/profiles`, { headers: authHeader });
};

//Various GET (auth) API calls

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getUserID = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => res.data)
    .catch(err => err);
};

//GROOMER PROFILE FORM FUNCTIONS
const postGroomerInfo = (
  url,
  authState,
  infoValues,
  setResultInfo,
  history
) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(url, infoValues, { headers })
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
};

const putGroomerInfo = (url, authState, infoValues, setResultInfo) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .put(url, infoValues, { headers })
    .then(res => {
      setResultInfo({ message: res.data.message, type: 'success' });
    })
    .catch(err => {
      setResultInfo({ message: err.message, type: 'error' });
    });
};

const postGroomerServices = (url, authState, serviceValues, setStateVar) => {
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(url, serviceValues, { headers })
    .then(res => {
      setStateVar({ message: res.data.message, type: 'success' });
    })
    .catch(err => {
      setStateVar({ message: err.message, type: 'error' });
    });
};

const deleteProfile = (authState, userType, userInfo, history, setStateVar) => {
  const headers = getAuthHeader(authState);

  axios
    .delete(`${process.env.REACT_APP_API_URI}/${userType}/${userInfo.sub}`, {
      headers,
    })
    .then(res => {
      history.push('/login');
    })
    .catch(err => {
      setStateVar({ message: err.message, type: 'error' });
    });
};

export {
  sleep,
  getGroomerServicesByID,
  getGroomerServices,
  getExampleData,
  getProfileData,
  getUserID,
  postGroomerInfo,
  putGroomerInfo,
  postGroomerServices,
  deleteProfile,
};
