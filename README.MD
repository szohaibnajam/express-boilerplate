I have divided the server code in modules and put API in a separate directory and routes are registered through module.js of each module we can also cater child routing from this section which is not needed at this time that's why didn't add it. 

In each modules section we have controllers which are handling the middleware functions of each request. checkout the "calculator.js" in "controllers" folder of API module and you would be able to understand how it is going to work similarly also check "module.js" file of API module this is actually registering the routes and it binds the add operation request to calculator add function. 

//*** See the following code extracted from *modules/api/module.js* line number 11
router.post('/addOperation', calculator.add);

Moreover, i have also create a constants and helpers object which will cater constant messages and helper function needed in request and response.


# Steps For Testing The API:

1. First clone this project
2. Run `npm install`
3. RUN `npm start` in the project directory you would be able to see server running on port 3000
4. Install postman of chrome /poster of firefox or other rest api client ( This client would help us to verify the rest API ).
5. Open Rest Client ( postman or poster ) and check *addOperation* API ( Add Operation API details are as follows)

# Steps to setup Database :
1. Create Database in MySQL
2. Update name of database and credentials in config/config.json file.
3. Run `sequelize db:migrate`


# API Add Operation

## REQUEST OPTIONS:

End point: http://localhost:3000/api/addOperation
content-type: application/json
request method: POST
request body: 

{"operand1":1,"operand2":1000}

## RESPONSE: (You will get the following response) 

Status: 200 OK
content-type: application/json
response body:

 {
  "message": "Operation successfully completed.",
  "data": {
    "result": 1001
  }
}
