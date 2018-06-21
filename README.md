**Homework 10 - DB**

***CLI - use***

    npm install
    
to install dependencies

start your mysql server 

you can find the file craigslist.sql in db folder
please import the file to your database

**run**

    npm start
    
to start the application

**open** 
    
    http://localhost:3000
    
in your browser

***endpoints:***

**http://localhost:3000/categories**​ - returns list of all ad categories from the database   
 
**http://localhost:3000/entries**​ - returns list of all  classified ad entries from the  database

**http://localhost:3000/categories/{category_name}/entries**​ - returns all classified adentries for a given category name 

**http://localhost:3000/add** - shows form to insert entries in database

after submit the form - http://localhost/entries is a **POST** endpoint for writing POST data to the database

use Postman to send **delete** request to http://localhost:3000/entries/{entry_id} to delete database entry with entry_id    
    