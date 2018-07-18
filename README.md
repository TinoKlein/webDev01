**Abschlussprojekt 2018**

***CLI - use***

    npm install
    
to install dependencies

start your mysql server 

you can find the file webdev1.sql in db folder
please import the file to your database

**run**

    npm start
    
to start the application

**open** 
    
    http://localhost:3000
    
in your browser

***endpoints:***

**http://localhost:3000**​ - login Form - log in with  
username:admin  
password:12345 
 
**http://localhost:3000/properties**​ - returns list of all properties from the database  

choose one of the displayed properties and click... Now you come to: 

**http://localhost:3000/property/:houseID/:floorID**​ - shows detail of selected property

there are four forms in this application with the following **POST** endpoints:

**/addHouse** - to add a new house or apartment

**/property/update** - to update the doors, windows and qm

**/property/addRoom** - to add a room to the selected floor

**/property/addFloor** - to add a floor in the selected house

***HAVE FUN***
    