**Documentation for Hawkin Spingies' Cape Events Web App**

*System Architecture*
    For my project, I have created a website making use of the full MERN stack. The application is an event planner for local vents, shows and parties
    where the user can browse through the various events happening in their area.

    The front end of the app has been made using Create React App. This framework does not host server side rendering, but is very intuitive and has many modules and plugins that provide a seamless development experience. 
    React and its counterparts do however need Node.js in order to run.


        - Structure -
            - End User -
            > There will be a Main home page where the events added to the site will be displayed
            > There will be a Register page on the default URI 
            > If the user already has an account or needs to log in as the admin for the application, there will be a link at the bottom of the form to lead to the Log in page. 
            > Upon creating an account or signing in, the user will be routed to the main Events page 
            > There the user will be able to view the various events that are happening in their local area, as well as visiting the original sites that are associated with the events to see more.

            - Admin User - 
            > If the user has Admin privileges, they will have access to a second page on the site via a conditionally rendered button where they will be directed to a navigation page that allows the admin to navigate to either the users page, the admin events page, or back to the home page. 
            > On the users page te admin will be able to delete users from the site and therefore from the backend database.  
            > On the events admin page the admin will be able to add/edit or delete event elements, this will update the database in the backend and perform crud operations to the database elements 

        - Modules -
            > Create react app
            > React Bootstrap & bootstrap
            > React Query 
            > React Router dom
            > jwt-decode
            > Jest



    The backend of the app will be made using Express. The app will Make use of MongoDB for the databases and Mongoose in order to seamlessly communicate with the server. 
    Nodemon will be used in order to update the server doe ease of development purposes.
    For security of the app Cors, bcrypt and jsonwebtoken will be used to generate auth tokens and hashing them. A .env config file is used for environment variables in order to streamline the code. The backend will handle the sign in and sign up endpoints. 
    The backend will also handle all of the endpoints responsible for the handling of the crud operations for the event elements and user data.
    When the user signs up , the password tah they create will be hashed using bcrypt, this will allow the user data  to be encrypted for security reasons. 
    The backend will also handle creating a jwt auth token for the user using the unique ID created by the server, in this case it is Mongodb.
    CRUD operations for the users and events will be handled in separate routers, controllers and models for modular structure and ease of use and testing. 
    

        - Structure -
            > Models will be used to structure the data that wll be communicated to the server as well as some initial functionalities for the user data
            > Controllers will handle most of the endpoint functionalities that will have to be communicated with the server
            > Routes will make the code more modular and easier to understand and debug
            > The server file wil act as a main hub for all of the functionalities as well as initializing the localhost and connection with the mongoose server.
        

        - Modules -
            > Express to handle the backend functionalities and servers
            > Cors for access to remote hosts
            > Nodemon for updating the server in development
            > Mongoose for communication with MongoDB
            > Jsonwebtoken for data encryption and authentication
            > bcrypt for data hashing 

*System Requirements*

    As this app will be deployed on Github for its ease of use and community and environment support. 
    The app will be deployed ad one file but the frontend and backend are in separate folders for modularity as well as the fact that the backend and frontend need to run on separate servers with different localhost port numbers. To install both of the folder will need to be installed with npm install as well as started with npm start. 
    Since this app will be a browser app, it is recommended to be used on a desktop. It will however be available on mobile and other devices should the need arise. 

    For the interfacing, there will be a page for both the sign in page and the sign up page. There will also be a page for the list of event elements displayed on the main page. The structure of the events will be in cards for ease of use and viewing. The details will be a picture, title, location and date there will also be a button that will take the user to the event site. If the user has admin privileges, the admin will be able to click a button on the page corner to be routed to the admin page, there they will be able to perform crud operations to the events but editing, deleting or adding new events as well as deleting users from the database if need be.

    The performance of the app is also important since the app is more tailored to local events, the traffic to the site will not be as busy as other mainstream Event applications, if the traffic becomes too much then a more size appropriate domain will need to be bought.

*Security*
On this site you must log in before you enter the site, if you don't have an account, then you must create one. If the user enters the special admin log in details the user can have access to the admin functionalities (Details in installation & setup section below). The users passwords are hashed by bcrypt and additional security is provided by cors. The data is stored on the database and the JWT token is generated from the users unique id created on mongodb as well as the boolean determining if the user is an admin or not. 
Only the admin will have access to the conditional link to the admin tools pages 


*Similar sites*

Similar sites to the one i am creating are sites like
    - quicket
    - everbrite
    - computicket 
    - facebook events
    - eventplanner.net

The Cape Events app is similar in intent to the other apps mentioned, the difference between them is that the Cape Events site tailors to local events in the area that may not be picked up by the mainstream sites. Some examples could be amateur musicians at various sites, smaller parties or social gatherings. 

*stories* 
    1. James is the admin of the Event planning site and in order to remove accounts that may be inactive or have to be removed for policy violations or 
    other malicious purposes, he needs the ability to remove users from the website.
    2. James also needs to be able to view all of the current users on the site in order to remove them or troubleshoot problems a user may report.
    3. Harry is an end user and is seeking to view some of the upcoming, current or past events that are happening in the cape area but does not 
    necessarily want to visit an all-encompassing site like Computicket or Quicket or the events he is looking for may be slightly more 'underground' or niche. He can visit our website to view tailored events happening in the local area that he may be interested in.
    4. Harry wants to be able to visit the native website of the events he is interested in attending
    5. Mark is a normal end user but he is concerned about the safety of his personal data entered when he signs up, security is important.

*Installation and setup*

In order to install this site, you will need to download the main folder on your local device. 
Once it is downloaded, you will need to open up the folder inside your IDE on your computer. 
You will need to open directories to both the Frontend and backend folders. 
On both of them you will need to run "npm install" on them to install the needed modules and dependencies
Once you have installed the modules you must initiate both of the front and backend folders with "npm start"
The app should be able to run and you can check out the functionalities to your hearts content 
    In order to run the backend server functionalities for this all you will need to run your own mongoDB free server. Create the server and once it is initiated, you must copy both the connection string and password that ypu have chosen while setting up the server. the connection string will be available in the "Drivers" connection option.
    In the main server.js backend file you will need to paste the connection string as well as the password that you have created or generated.

If you want to make use of the admin functionalities you will need to use the admin details to log in: 
email: admin@gmail.com
password: admin

For a normal user if you don't feel like making an account you can log in with the normal end user account with the following details: 
email: hawkin@gmail.com
password: 123456

The admin functionalities are either to delete users from the /adminusers page or to manipulate the events from the /adminevents page. On the admin events page you can add new events to your liking as well as delete them or edit them (you must delete the original after you edit it, or a duplicate will be made).

