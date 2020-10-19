# Back-End

## Deployed on Heroku [virtual reality funding platform](https://virtualrealityfunding.herokuapp.com/)

## Users Schema

#### Axios call for registering a new user:

`axios.post(https://virtualrealityfunding.herokuapp.com/api/auth/register)`

- Required fields to register:

###### Request Body:

```
{
  "username": "example",
  "email": "example@email.com",
  "password": "password",
  "roles": ["role1, role2"]
```

###### Returns:

```
{
  "data": {
    "id": 1,
    "username": "example"
    "email": "example@email.com",
    "password": "$2a$08$0etMJmlr3.7JokXFU95QC.t4GZBxrN9Tob6BnRxcTquzoKOYmzLmu"
  }
}
```

`axiosWithAuth().post(https://virtualrealityfunding.herokuapp.com/api/auth/login, credentials)`

- Required fields to login:

###### Request Body:

```
{
  "username": "example",
  "email": "example@email.com",
  "password": "password"
}
```

###### Returns:

```
{
    "message": "Welcome to Virtual Reality Funding",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImQiLCJpZCI6MSwiaWF0IjoxNjAzMDg0MTc3LCJleHAiOjE2MDMxMTI5Nzd9.kJFPktLptVna8S4dkDI3hsiMABhRLqORTxrZUqMuaCY"
}
```

## Project Schema

###### Request Body:

```
{
  "project_name": "example",
  "project_description": "lorem ipsum lorem ipsum",
  "project_goal": 50000
}
```

###### Returns:

```
{
  "data": {
    "id": 1,
    "project_name": "example",
    "
  }
}
```

#### Axios call for registering a new user:

`axios.get(https://virtualrealityfunding.herokuapp.com/api/projects)` (requires token)

## Endpoints

|    Route     | Method | Endpoint         | Description                                                                 | Required                  |
| :----------: | :----: | ---------------- | --------------------------------------------------------------------------- | ------------------------- |
|   **Auth**   |  POST  | /auth/register   | Creates a new user                                                          | email, username, password |
|              |  POST  | /auth/login      | Logs in a user, returns a token to be added to the header of other requests | username, password        |
| **Articles** |  GET   | /articles        | Returns a list of public articles                                           | No token required         |
|  **Boards**  |  GET   | /boards          | Returns a list of boards in the database                                    | token                     |
|              |  GET   | /boards/user/:id | Returns boards of logged in user by user id                                 | token                     |
|              |  GET   | /boards/:id      | Returns specified board by id                                               | token                     |
|              |  POST  | /boards          | Adds a new board, returns the added board                                   | token                     |
|              |  PUT   | /boards/:id      | Updates the specipecified board by id                                       | token                     |
|              | DELETE | /boards/:id      | Deletes the specified board by id                                           | token                     |
|  **Users**   |  GET   | /users           | Returns a list of users in the database                                     | token                     |
|              |  GET   | /users/:id       | Returns the specified user by id                                            | token                     |
|              |  PUT   | /users/:id       | Updates the specified user by id                                            | token                     |
|              | DELETE | /users/:id       | Deletes the specified user by id                                            | token                     |
