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
  "project_goal": 50,000
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

`axios.get(https://virtualrealityfunding.herokuapp.com/api/projects)`
