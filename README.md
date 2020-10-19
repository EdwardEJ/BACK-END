# Back-End

## Deployed on Heroku [virtual reality funding platform](https://virtualrealityfunding.herokuapp.com/)

## Users Schema

#### Axios call for registering a new user:

`axios.post(https://virtualrealityfunding.herokuapp.com/auth/register)`

- Required fields to register:

###### Request Body:

```
{
  "username": "example",
  "email": "example@email.com",
  "password": "password",
  "roles": ["role1, role2"]
}
```

###### Returns:

```
{
  {
    "id": 1,
    "username": "example"
    "email": "example@email.com",
    "password": "$2a$08$0etMJmlr3.7JokXFU95QC"
  }
}
```

`axiosWithAuth().post(https://virtualrealityfunding.herokuapp.com/auth/login, credentials)`

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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImQiLCJpZCI6MSwiaWF0IjoxNjAzMDg0MTc3LCJleHAiOjE2MDMxMTI5Nzd9"
}
```

## Project Schema

###### Request Body:

```
{
  "project_name": "test",
  "project_description": "testing",
  "project_goal": 50000
}
```

###### Returns:

```
{
  {
    "id": 7,
    "project_name": "test",
    "project_description": "testing",
    "project_goal": 50000,
    "user_id": 2
  }
}
```

#### Axios call for registering a new user:

`axios.get(https://virtualrealityfunding.herokuapp.com/projects)` (requires token)

## Endpoints

|    Route     | Method | Endpoint       | Description                                                                 | Required                  |
| :----------: | :----: | -------------- | --------------------------------------------------------------------------- | ------------------------- |
|   **Auth**   |  POST  | /auth/register | Creates a new user                                                          | email, username, password |
|              |  POST  | /auth/login    | Logs in a user, returns a token to be added to the header of other requests | username, password        |
| **Projects** |  GET   | /projects      | Returns a list of projects                                                  | token                     |
|              |  GET   | /projects/:id  | Returns projects of user by user id                                         | token                     |
|              |  POST  | /projects      | Adds a new project, returns the added board                                 | token                     |
|              | DELETE | /projects/:id  | Deletes the specified board by id                                           | token                     |
