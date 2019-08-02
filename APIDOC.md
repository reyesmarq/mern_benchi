# Benchi Api 

**INTRODUCTION**

description of the introduction

## Allowed HTTPs requests:
* `GET`: To fetch a resource or list of resources
* `POST`: To create resource
* `PUT`: To update resource
* `DELETE`: To delete a resource

## Description of server responses
* 200 `OK` - the request was successful (some API calls may return 201 instead).
* 201 `Created` - the request was successful and a resource was created.
* 204 `No Content` - the request was successful but there is no representation to return (i.e. the response is empty).
* 304 `Not modified` - 
* 400 `Bad Request` - the request could not be understood or was missing required parameters.
* 401 `Unauthorized` - authentication failed or user doesn't have permissions for requested operation.
* 403 `Forbidden` - access denied.
* 404 `Not Found` - resource was not found.
* 405 `Method Not Allowed` - requested method is not supported for resource.
* 409 `conflict` - Resolve the conflict and resubmit the request
* 500 `Internal server error` - server error

## Somes examples

### Table sample

### Code sample

**REFERENCE**

## Customer
Represents customer details

**Customer attributes:**

* id `(objectId)`: database unique identifier
* firstName `(string)`: First name
* lastName `(string)`: Last name
* localId `(string)`: unique customer, person Id
* securityCode `(string)`: customer security code
* lastUpdate `(date)`: last time the customer got updated
* creationDate `(date)`: creationdate

## Customer collection

### Fetch all customers

```
GET -  http://domain.com/api/customers
```

**URI params**

* `page=pageNumber`

**Response**

```json
{
  "message": "customers fetched successfully",
  "data": {
    "total": 12,
    "per_page": 5,
    "current_page": 1,
    "last_page": 38,
    "next_page_url": "http:\/\/domain.com\/api\/customers?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 5,
    "data": [
      {
        "first_name": "marcela",
        "last_name": "vargas",
        "document": {
          "type": "id",
          "number": "045151963-4"
        },
        "last_update": "date",
        "creation_date": "date",
        "id": 1
      },
      {
        "first_name": "mau",
        "last_name": "reyes",
        "document": {
          "type": "id",
          "number": "045151963-4"
        },
        "last_update": "date",
        "creation_date": "date",
        "id": 2
      }
    ]
  }
}
```

### Fetch one customer

```
GET -  http://domain.com/api/customers/${id}
```

```json
{
  "message": "customer fetched successfully",
  "data": {
    "first_name": "marcela",
    "last_name": "vargas",
    "document": {
      "type": "id",
      "number": "045151963-4"
    },
    "last_update": "date",
    "creation_date": "date",
    "id": 1
  }
}
```

### Create a customer

```
POST -  http://domain.com/api/customers
```

**Headers**

* `"Content-Type": "application/json"`

**Body**

```json
{
  "first_name": "marce",
  "last_name": "vargas",
  "document": {
      "type": "id",
      "number": "045151963-4"
    },
  "security_code": "0505"
}
```

**Response**

```json
{
  "message": "customer created successfully",
  "data": {
    "customer": {
      "first_name": "marce",
      "last_name": "vargas",
      "document": {
        "type": "id",
        "number": "045151963-4"
      },
      "last_update": "date",
      "creation_date": "date",
      "id": 123
    }
  }
}
```

### Update customer

```
PUT -  http://domain.com/api/customers/${id}
```

**URI params**

* none

**Headers**

* `"Content-Type": "application/json"`

**Body**

```json
{
  "first_name": "marce",
  "last_name": "vargas",
  "document": {
      "type": "id",
      "number": "045151963-4"
    },
  "security_code": "0505"
}
```

**Response**

```json
{
  "message": "customer updated successfully",
  "data": {
    "customer": {
      "first_name": "marce",
      "last_name": "vargas",
      "document": {
          "type": "id",
          "number": "045151963-4"
        },
      "last_update": "date",
      "creation_date": "date",
      "id": 123
    }
  }
}
```

### Delete customer

```
PUT -  http://domain.com/api/customers/${id}
```

```json
{
  "message": "customer updated successfully"
}
```