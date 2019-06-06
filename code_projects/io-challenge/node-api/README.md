# NodeJs API

### Introduction

This API is developed in NodeJS + Express and Mongodb.
### Ticket Model

```json
{
    "title" : "{ type: String, required: true }",
    "description":  "{ type: String, required: true }",
    "coords" : "[{ type: Number, required: true }]",
    "code" : "{ type: Number, required: true }",
    "createdOn" : "{ type: Date, default: Date.now }"
}
```

----

### Create Tickets

**POST** => `http://localhost:8080/api/tickets`

### Example

**POST** => `http://localhost:8080/api/tickets`

*Request Body*

```json
{
    "title" : "Ticket Title",
    "description" : "Short description for the ticket",
    "coords" : [ "-34.5603563", "-58.453944" ]
}
```
### Response
```json
{
    "_id": "5a9d65368553bab694e02065",
    "title": "Ticket Title",
    "description": "Short description for the ticket",
    "code": 1,
    "createdOn": "2018-03-05T15:41:42.422Z",
    "coords": [
        "-34.623164",
        "-58.365047"
    ]
}
```
----

### Get all Tickets

**GET** => `http://localhost:8080/api/tickets`

### Example

**GET** => `http://localhost:8080/api/tickets`
### Response

```json
[
    {
        "_id": "5a9d65368553bab694e02065",
        "title": "Ticket Title",
        "description": "Short description for the ticket",
        "code": 1,
        "createdOn": "2018-03-05T15:41:42.422Z",
        "coords": [ "-34.623164", "-58.365047" ]
    }
]
```

----



## Run project on localhost

Firts you need to install project dependencies. To do this, run in your terminal the next command. 

```npm install``` or ```yarn```  (if you don't have yarn, you can install by ```npm i -g yarn```)

Then, when the dependecies were install you need to rename the `sample.env`  => `.env` and set the **MONGO_DB** connection string.

`npm run dev` or `npm start`

Let's Go to Code!



