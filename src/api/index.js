import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
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

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

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
// TODO finish this
const postGroomerServices = (url, authState, serviceValues, setResultInfo) => {
  console.log('serviceValues', serviceValues);
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .post(url, serviceValues, { headers })
    .then(res => {
      setResultInfo({ message: res.data.message, type: 'success' });
    })
    .catch(err => {
      setResultInfo({ message: err.message, type: 'error' });
    });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getUserID,
  postGroomerInfo,
  putGroomerInfo,
  postGroomerServices,
};
