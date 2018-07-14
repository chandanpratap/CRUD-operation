# CRUD-operation

Project Name: Create a basic rest API that can perform the CRUD operation on users.In this project the user can add, update, delete and get the list of all employees.

Installation: For make this project i am using Microsoft Visiual Studio,and after that install the microsoft sql server for database store the table of employee.
                       Install the node js and connect with the microsoft visiual studio,And we use the POSTMAN for see the crud operation.Postman is a google chrome app for intracting with http APIs.

Usage: In microsoft visiual studio first create a project name SampleRest.In SampleRest have a npm folder,first we add the mssql database connector for node js.In samplerest project we add a java script page settings.js for write a database connect code.

After that we create a new folder core ,inside core folder we add a new java script item name db.js.In db.js file we connect the settings.js and mssql.In core folder we add a new js item name server.js, in server.js we write a code for all CRUD operations.and connect the all js file.

And we add a one more folder name controllers ,inside this folder we add a new js item name employees.js for write a query of all CRUD operations.

In core folder we add a new js item name httpMsgs, this js file we used for if user enter the any wrong input then show the error messages.
For see the all operation we use the postman tool,in this tool in text field write http://localhost/9000/employees and push the send button ,so we see the result what we want.
