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

[Onboarding Video/Demo](https://www.youtube.com/watch?v=Z3cMgTNvtLc&feature=youtu.be): This `very useful` video was created by the Labs PT14 team to introduce the next labs teams working on this project to the current state of the project and various quirks and items of note.

The original [Instructional ReadMe](INITIAL_README.md) for this repository can be found [here](INITIAL_README.md) and you may need to consult it to set up your local environment.

<br>

## **Features**

The initial descriptions beneath each *feature* below are the state of the application when LabsPT14 recieved the repos. The descriptionss and titles are all extracted from the product road map.

### **1. Search Groomer Database**

*Groomers able to set up profile.  Based on the groomer profile, users will be able to search groomers.  While teams did work on this, this will need to be reviewed and changed at your discretion.*

* **Overview:**
This part of the roadmap includes several 'features'
    1. Internal Groomer profile where the Groomer can add/edit information.
    2. Customer facing Groomer profile, which will pull from the database the information the groomer has entered.
    3. Actual search bar which brings up relevant cards.  From these cards the customer may choose to view the full customer facing Groomer Profile.

* **Changes:** This team built on the original team's basic rendering of the all of the above features, and made improvements:
    1. A groomer dashboard feature with tabs (using an Ant Design component) was implemented.  The Groomer Profile takes up one of the tabs.
        - Three forms may be used to add general information, Groomer hours, and a list of services and prices.
        - Services are populated in a drop down menu from the back end to prevent duplications, user error, etc. The groomer can choose what price they will charge for a service if they add it to their profile. If a groomer has specialized services they want to add they are free to describe them in a general about section. The dropdown services menu is currently populated via a seeded table on the backend.
        - Hours default to closed for each day of the week, and the groomer may choose an open and close time for each day.  This is meant to be general information and not their specific appt avialabilty.  The hours form input is stringified and stored in the backend as a string, then when called the hours are parsed. This works perfectly after some tweaks and is easier than dealing with a complicated table/conversion library for the simple purpose of displaying hours open.  Groomers may edit their hours at any time.

* **Future Potential:**
    1. The groomer dashboard has great potential to be fleshed out and the initial view/tab used to display upcoming information such as appointments.
    2. The backend has a file upload to AWS s3 integrated and some routes for uploading images have been created.  An upload component has been created on the front end but it is not all connected properly yet as should be noted in the code.
    3. The Groomer searchbar only allows searchs by city at the moment and searching by business name, service, zipcode, state etc. would be great improvements.

   ## Features to finish/implement.
    `Finishing the upload capability and integrating a profile image for the groomer should be on the list of features to be added.  Also the feature for a groomer to upload a licence/other credentials should be finished`

    `Accessing the Calendly for the groomer is currently only available on the customer facing groomer profile page. A close look at the available Calendly integration options looks like it can be further embedded into the application and perhaps appointment data can be pulled to display within the Groomer Dashboard.`

    `UI can be improved.`

    `Groomer text search parameters should be increased.`


<br>

### **2. User Profile/ Pet Profile**

*While the user profile is complete, please review and implement any changes you see fit.  As a user, I want to a simplistic profile, so that I can see my appointments, pet profile, and easy access to edit in one place. Also the ability to upload vaccines and link.*

*

* **Changes:**

* **Future Potential:**

<br>

### **3. Enhanced Groomer Search**

*Using the mapbox API, provide a way for users to search within an area.  The user should be able to enter an address, provide a search radius, and the output will be a list of groomers based on the criteria entered.  The user should also be able to pin the groomers or save for later.  In the groomer profile, there needs to be a component to upload license and add license number.*

* **Changes:**

* **Future Thoughts:**

<br>

### **4. Appointments/ Scheduling**

*Groomers should be able to manage the request from users, schedule appointments, and have a way to manage their appointments.  Possible KanBan style.  This would be MVP.  Possible API integration for appoint scheduling/confirmation.*

* **Changes:**

* **Future Thoughts:**

<br>

### **5. Groomer Rating System**

*Users will be able to rate groomers based on the experience they had.  This rating should be 1-5 stars and an option for the user to provide comments based on thier experience.*

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

Backend [`Github Repo`](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE) located [here](https://github.com/Lambda-School-Labs/Express_Groomer-TeamB-BE).


Back End [`Deployed Site`](https://express-groomer-b-api.herokuapp.com/) located [here](https://express-groomer-b-api.herokuapp.com/).

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





