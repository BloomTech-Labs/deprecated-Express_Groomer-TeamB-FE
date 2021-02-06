# Express Groomer

Express groomer connects groomers and clients.  This allows for groomers to meet at the clients residence or allows the clients to meet at the groomers.  Clients will have the ability to safely schedule an appointment and groomers can grow their business.

You can find the [`Deployed Project`](https://b.expressgroomer.dev) located [here](https://b.expressgroomer.dev).

---

<br>

## Project Overview
<br>

### **Resources**


[Labs PT14 Trello Board](https://trello.com/b/TjEIzVvG/labspt14-express-groomer-b)

[Labs PT14 Product Roadmap](https://www.notion.so/Express-Groomer-Build-On-171e358c0a2f49019572d0afa7ff5ba0)

[Onboarding Video/Demo](https://www.youtube.com/watch?v=Z3cMgTNvtLc&feature=youtu.be): This video was created by the Labs PT14 team to introduce the next labs teams working on this project to the current state of the project and various quirks and items of note.

<br>

## **Features**

The initial descriptions beneath each *feature* below are the state of the application when LabsPT14 recieved the repos. The descriptionss and titles are all extracted from the product road map.

### **1. Search Groomer Database**

>Groomers able to set up profile.  Based on the groomer profile, users will be able to search groomers.  While teams did work on this, this will need to be reviewed and changed at your discretion.

* **Changes:**

* **Future Thoughts:**



<br>

### **2. User Profile/ Pet Profile**

> While the user profile is complete, please review and implement any changes you see fit.  As a user, I want to a simplistic profile, so that I can see my appointments, pet profile, and easy access to edit in one place. Also the ability to upload vaccines and link.

* **Changes:**

* **Future Thoughts:**

<br>

### **3. Enhanced Groomer Search**

> Using the mapbox API, provide a way for users to search within an area.  The user should be able to enter an address, provide a search radius, and the output will be a list of groomers based on the criteria entered.  The user should also be able to pin the groomers or save for later.  In the groomer profile, there needs to be a component to upload license and add license number.

* **Changes:**

* **Future Thoughts:**

<br>

### **4. Appointments/ Scheduling**

> Groomers should be able to manage the request from users, schedule appointments, and have a way to manage their appointments.  Possible KanBan style.  This would be MVP.  Possible API integration for appoint scheduling/confirmation.

* **Changes:**

* **Future Thoughts:**

<br>

### **5. Groomer Rating System**

> Users will be able to rate groomers based on the experience they had.  This rating should be 1-5 stars and an option for the user to provide comments based on thier experience.

* **Changes:**

* **Future Thoughts:**

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
- Front end deployed to [`AWS Amplify`](https://b.expressgroomer.dev)

<br>

## **Authentication API**

Okta API for Authentication:

The Okta Identity Cloud gives you one trusted platform to secure every identity in your organization and connect with all your customers.

## **Environment Variables**

```
REACT_APP_CLIENT_ID=....
REACT_APP_OKTA_ISSUER_URI=....
REACT_APP_API_URI=http://localhost:8000
REACT_APP_MAPBOX_TOKEN=....
REACT_APP_MAPBOX_STYLE=mapbox://styles/jgertig/ckjz150hz03vj17rw47oq53wb
```

## **Testing**

JEST is currently used to have basic testing for the front end. The front end is largely without tests at this time.

## **State Management**

Currently the application's state is managed through Context API and includes a large number of contexts. Naturally, the useState hook is also used for more local state management.

While there are 'actions' and 'reducers' directories present in the repo in the 'state' directory, they remain as a part of the original suggested scaffolding, Redux has never been implemented in this application.

<br>

# **Back End API**

#### Backend [`Github Repo`](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE) located [here](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE).


#### Back End [`Deployed Site`](https://express-groomer-b-api.herokuapp.com/) located [here](https://express-groomer-b-api.herokuapp.com/).

<br>

## Tech Stack 

- Node.js
- Express
- Knex
- PostgreSQL
- Docker
- AWS S3
- Multer

<br>

 ## Back End Documentation

See the [Backend Documentation Generated in Postman](https://documenter.getpostman.com/view/10971957/TVzViwNL) for details on the interacting with the backend of the project. 

You can import the entire Postman Collection via this button: 


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/f34416839ea9be987e33)

**`NOTE:`**  neither this documentation nor the Postman collection include the authentication headers with the Bearer Token needed to access protected routes.  

Within the repo you will find almost all API calls being made via functions within the APIContext.js file (src/state/contexts/APIContext.js). Within that file you will see the function which generates the authheaders which hold the Bearer Token recieved from Okta.

<br>

## Environment Variables

```
OKTA_URL_ISSUER=...
OKTA_CLIENT_ID=...
DATABASE_URL=...
PORT=8000
CORS_ORIGIN=...
AWS_BUCKET_NAME=...
AWS_ID=...
AWS_SECRET=...
```


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)





