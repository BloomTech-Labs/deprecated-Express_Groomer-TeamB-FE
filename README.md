# Express Groomer

You can find the [`Deployed Project`](https://b.expressgroomer.dev) located [here](https://b.expressgroomer.dev).

<br>

## Project Overview
<br>

### **Resources**


[Labs PT14 Trello Board](https://trello.com/b/TjEIzVvG/labspt14-express-groomer-b)

[Labs PT14 Product Roadmap](https://www.notion.so/Express-Groomer-Build-On-171e358c0a2f49019572d0afa7ff5ba0)

[Onboarding Video/Demo](https://www.youtube.com/watch?v=Z3cMgTNvtLc&feature=youtu.be): This video was created by the Labs PT14 team to introduce the next labs teams working on this project to the current state of the project and various quirks and items of note.

<br>

## **Features**

- Mapbox Interface (React Map Gl)

<br>

## **Tech Stack**

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


### Front end deployed to [`AWS Amplify`](https://b.expressgroomer.dev)



## 2️⃣ Authentication API here

Okta API for Authentication:

The Okta Identity Cloud gives you one trusted platform to secure every identity in your organization and connect with all your customers.

## 3️⃣ Environment Variables ##

```
REACT_APP_CLIENT_ID=....
REACT_APP_OKTA_ISSUER_URI=....
REACT_APP_API_URI=http://localhost:8000
REACT_APP_MAPBOX_TOKEN=....
REACT_APP_MAPBOX_STYLE=mapbox://styles/jgertig/ckjz150hz03vj17rw47oq53wb
```

## 4️⃣ Testing

JEST is currently used to have basic testing for the front end. The front end is largely without tests at this time.

## 5️⃣  Back End API

#### Backend [`Github Repo`](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE) located [here](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE).


#### Back End [`Deployed Site`](https://express-groomer-b-api.herokuapp.com/) located [here](https://express-groomer-b-api.herokuapp.com/)

### Tech Stack 

- nodejs
- express
- postgreSQL
- Docker

 ### Back End Documentation

See the [Backend Documentation Generated in Postman](https://documenter.getpostman.com/view/10971957/TVzViwNL) for details on the interacting with the backend of the project. 

You can import the entire Postman Collection via this button: 


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f34416839ea9be987e33)

**NOTE:** neither this documentation nor the Postman collection include the authentication headers with the Bearer Token needed to access protected routes.  

Within the repo you will find almost all API calls being made via functions within the APIContext.js file (src/state/contexts/APIContext.js). Within that file you will see the function which generates the authheaders which hold the Bearer Token recieved from Okta.

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)





