# Benshi

## Requirements

It is required to carrying the control of the transactions of a bank. Data of each client are: id, security code, name, account ID, transaction type (withdrawal or depodit), balance of the account and creation date. It is required a menu with the following functions:

1. Add customer
2. Add transaction
3. Update Customer
4. Delete customer
5. Deposit report
6. Withdrawal deposit
7. All customers report
8. Sign sign
9. Sign out

In order to add a transaction it will be required to add the security code of the customer previously configured

In order to update or delete customer it will be required to add the security code of the customer previously configured

While printing "All of the customers" with withdrawal and deposit, add the avarage of withdrawal and deposit and totals.

## Business Logic

* **Client**: This is going to the the super administrator of the whole organization. 
* **User**: This is going to be the bank's representative
* **Customer**: the end user or the bank's account holder

## Tech

This project will be build using MERN stack
* **M**ongo
* **E**xpress
* **R**eact
* **N**odejs

## Backend

An api will be created and will be consumed using reactjs in the front end.

### API backend folder structure

<pre>
api/
</pre>

### Data models

#### Client

| Field          | Type     | Description                                       |
| -------------- | -------- | ------------------------------------------------- |
| id             | objectID | Client's unique id                                |
| admin          | string   | Super administrator's email                       |
| domain name    | string   | unique domain name                                |
| firstname      | string   | admin firstName                                   |
| lastname       | string   | admin lastName                                    |
| company's name | string   | Company name                                      |
| users allowed  | number   | amount of users this client is allowed to created |

#### Representative / User

| Field     | Type     | Description          |
| --------- | -------- | -------------------- |
| id        | objectID | users's unique ID    |
| firstName | string   | user firstName       |
| lastName  | string   | user lastName        |
| email     | string   | unique username      |
| password  | string   | password will be md5 |
| client    | string   | client's id          |

#### Customer

| Field                | Type     | Description              |
| -------------------- | -------- | ------------------------ |
| id                   | objectId | customer id              |
| first_name           | string   | customer firstname       |
| last_name            | string   | customer lastname        |
| document_information | object   | {type, number}           |
| security_code        | number   | 4 digit number           |
| client               | string   | client's id              |
| creation_date        | Date     | customer's creation date |


#### Bank Account

| Field          | Type     | Description                    |
| -------------- | -------- | ------------------------------ |
| id             | objectId | bank account id                |
| account number | number   | unique bank account number     |
| customer       | string   | custmoer's id                  |
| balance        | number   | current balance. Cannot be < 0 |
| CreationDate   | Date     | bank account's creation date   |

#### Transaction

| Field        | Type     | Description                    |
| ------------ | -------- | ------------------------------ |
| id           | objectId | transaction id                 |
| bank account | string   | bank account's id              |
| type         | string   | enum { widthdrawal / deposit } |
| amount       | number   | amonut of the transaction      |
| date         | Date     | date of the transaction        |


### API endpoint

Global endpoint `/api`


___

### Handlers

| Resource          | GET<br><small>read</small> | POST<br><small>create</small> | PUT<br><small>update</small> | DELETE                      |
| ----------------- | -------------------------- | ----------------------------- | ---------------------------- | --------------------------- |
| `/customers`      | Return all customers       | Create a customer             | update bulk customers        | delete all of the customers |
| `/customers/{id}` | Return a customer          |                               | update a customer            | delete a customer           |

# Todos

- [x] creating the api
  - [ ] SET an autoincrement that woudl serve as external ID. for easy urls, instead of the mongodbid
  - [ ] Authentication using passport JWT
    - [ ] Sign in
    - [ ] Sign up - onboarding through Super Administrator.
      - [ ] I have created the /users/signup endpoint, but would not be possible for users but for clients. Clients would be capable of adding more users. Because he is the super administrator
  - [x] create the folder structure
  - [x] design the models and mongo database
  - [x] build the models
    - [x] customer
      - [x] replace local_id for document: { type: enum | personal_id | passport, number: 'number' }
    - [x] bank account
    - [x] transactions
  - [x] build the controllers / handlers
    - [ ] Customer
      - [x] getCustomers
      - [x] postCustomers to create a customer
      - [x] putCustomer/id to update a customer
      - [x] deleteCustomer/id to delete a customer
    - [ ] Transactions
      - [ ] getTransactions
      - [ ] getTransaction
      - [ ] postTransaction
      - [ ] deleteTransaction
    - [ ] Bank Account, it is posible that one customer have more than one bank account
      - [ ] getBakAccounts
      - [ ] getBankAccount/id
      - [ ] postBankAccount
      - [ ] deleteBankAccount/id
      - [ ] putBankAccount/id
  - [x] build the application api with express
  - [ ] enable cors to handle form information
  - [ ] creating api documentation with swagger (possible)
- [ ] creating the UI
- [x] own styling or css framework
  - [ ] going to use css framework [Bulma css](https://bulma.io/)
- [ ] initiate the react application
  - [ ] useContext or redux

# POSIBLE RESPONSES

**Sign up**

```json
{
    "message": "token_generated",
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwODksImlzcyI6Imh0dHBzOlwvXC9yZWFjdC1ibG9nLWFwaS5iYWhkY2FzdHMuY29tXC9hcGlcL2F1dGhcL3JlZ2lzdGVyIiwiaWF0IjoxNTY0NzUzNTI4LCJleHAiOjI3NzQzNTM1MjgsIm5iZiI6MTU2NDc1MzUyOCwianRpIjoibWhSQ2RSdXBDS29aVWhDQSJ9.kENw9mOYhrpsq5rAYq40BDOs0MP70PADWES-zFwQZDs",
        "user": {
            "name": "Mauricio",
            "email": "posting@posting.com",
            "updated_at": "2019-08-02 13:45:28",
            "created_at": "2019-08-02 13:45:28",
            "id": 2089
        }
    }
}
```

**Sign up**

```json
{
    "message": "token_generated",
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIwODksImlzcyI6Imh0dHBzOlwvXC9yZWFjdC1ibG9nLWFwaS5iYWhkY2FzdHMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTY0NzUzNzA3LCJleHAiOjI3NzQzNTM3MDcsIm5iZiI6MTU2NDc1MzcwNywianRpIjoiWjE1VGFJMVgzOHBENzJsaiJ9.EW3t1dU-XvNiUc1Wc96FQEeNldlt8R9HmaWBiSBblyA",
        "user": {
            "id": 2089,
            "name": "Mauricio",
            "email": "posting@posting.com",
            "created_at": "2019-08-02 13:45:28",
            "updated_at": "2019-08-02 13:45:28"
        }
    }
}
```

**Fetch articles**

```json
{
    "status": "success",
    "data": {
        "total": 186,
        "per_page": 5,
        "current_page": 1,
        "last_page": 38,
        "next_page_url": "https:\/\/react-blog-api.bahdcasts.com\/api\/articles?page=2",
        "prev_page_url": null,
        "from": 1,
        "to": 5,
        "data": [
          {
                "id": 241,
                "title": "Sun, sun, go away, make me burn some other day",
                "slug": "sun-sun-go-away-make-me-burn-some-other-day-1564691031",
                "user_id": 1886,
                "category_id": 5,
                "imageUrl": "https:\/\/res.cloudinary.com\/tsullivan\/image\/upload\/v1564691030\/lxg0btqtmf3lxoze4eyt.jpg",
                "content": "content of the article",
                "created_at": "2019-08-01 20:23:51",
                "updated_at": "2019-08-01 20:23:51",
                "user": {
                    "id": 1886,
                    "name": "tessa",
                    "email": "tessa.sullivan@gmail.com",
                    "created_at": "2019-07-25 15:06:32",
                    "updated_at": "2019-07-25 15:06:32"
                },
                "category": {
                    "id": 5,
                    "name": "Fugiat vero.",
                    "slug": "fugiat-vero",
                    "created_at": "2019-04-02 05:06:57",
                    "updated_at": "2019-04-02 05:06:57"
                }
            }
        ]
    },
    "message": "Articles fetched successfully."
}
```

**Delete articles**

```http
DELETE /articles/${id}
```