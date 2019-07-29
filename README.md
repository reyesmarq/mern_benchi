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

| Field         | Type     | Description              |
| ------------- | -------- | ------------------------ |
| id            | objectId | customer id              |
| firstName     | string   | customer firstname       |
| lastname      | string   | customer lastname        |
| localid       | string   | customer local id unique |
| security code | number   | 4 digit number           |
| client        | string   | client's id              |
| CreationDate  | Date     | customer's creation date |


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

* **GET** /customers

  fetch the list of the customers

* **POST** /customers

  Create a customers. Needs the following information on the body. 
___

# Todos

- [ ] creating the api
  - [ ] create the folder structure
  - [ ] design the models and mongo database
  - [ ] build the models
  - [ ] build the controllers / handlers
  - [ ] build the application api with express
  - [ ] enable cors to handle form information
  - [ ] creating api documentation with swagger (possible)
- [ ] creating the UI
- [ ] own styling or css framework
- [ ] initiate the react application
  - [ ] useContext or redux