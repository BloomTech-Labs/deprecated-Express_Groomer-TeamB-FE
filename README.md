# Express Groomer

You can find the deployed project at https://a.bridgestoprosperity.dev/

Here is the Demo for the project: https://youtu.be/Q3rNoQhRpxk                |

<br>

## Project Overview

[Trello Board](https://trello.com/b/TjEIzVvG/labspt14-express-groomer-b)

[Labs PT14 Product Roadmap]()

[Onboarding Video/Demo](https://www.youtube.com/watch?v=Z3cMgTNvtLc&feature=youtu.be)

<h2>Description</h2>

Our website receives and displays data from our backend API. Displays data on mapbox interface, using React Map Gl, and also on ant design table. Users are unable to interact with the data on the mapbox interface and the table to view additional information and edit data points. Users can zoom in and the boundaries of all the communities will show, also users can switch to the satellite style We used react-chartjs-2 and echarts for data visualization.

## 1️⃣ Key Features

- Mapbox Interface (React Map Gl)


## 2️⃣ Tech Stack

### Front end built using:

- React
- React-Router-Dom
- Context API
- Okta
- Ant Design
- Axios
- MapBox via [react-map-gl](https://visgl.github.io/react-map-gl/)
- Calendly via [react-calendly](https://www.npmjs.com/package/react-calendly)
- Styled Components
- Less (Installed with AntDesign)


#### Front end deployed to `AWS`

https://a.bridgestoprosperity.dev/

#### [Back end] built using:

https://github.com/Lambda-School-Labs/Labs27-B-Bridges-BE

#### back end framework goes here

- nodejs
- express
- postgreSQL
- Docker


## 2️⃣ Authentication API here

Okta API for Authentication:

The Okta Identity Cloud gives you one trusted platform to secure every identity in your organization and connect with all your customers.

## 3️⃣ Environment Variables

```
REACT_APP_CLIENT_ID=....
REACT_APP_OKTA_ISSUER_URI=....
REACT_APP_API_URI=http://localhost:8000
REACT_APP_MAPBOX_TOKEN=....
REACT
```

## 4️⃣ Testing

JEST is currently used to have basic testing for the front end. The front end is largely without tests at this time.

## 5️⃣  Backend Documentation

See the [Backend Documentation Generated in Postman](https://documenter.getpostman.com/view/10971957/TVzViwNL) for details on the interacting with the backend of the project. 

You can import the entire Postman Collection via this button: 


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f34416839ea9be987e33)

**NOTE:** neither this documentation nor the Postman collection include the authentication headers with the Bearer Token needed to access protected routes.  

Within the repo you will find almost all API calls being made via functions within the APIContext.js file (src/state/contexts/APIContext.js). Within that file you will see the function which generates the authheaders which hold the Bearer Token recieved from Okta.

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)





