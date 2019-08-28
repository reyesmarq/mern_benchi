const
  Customer = require('../models/customer'),
  BankAccount = require('../models/bankAccount'),
  { OK, CONFLICT, CREATED } = require('../utils/resCodes'),
  { response } = require('../utils/response')

const postCustomers = async (req, res) => {
  const { firstName, lastName, documentInformation } = req.body
  /**Validating existing customer with local id */
  const existingCustomer = await Customer.findOne({ "documentInformation.number": documentInformation.number })
  if (existingCustomer) {
    return response(req, res, CONFLICT, null, 'There is a customer with this ID')
  }

  const newCustomer = new Customer(req.body)
  const newBankAccount = new BankAccount({ number: `${Math.round(Math.random() * 100000)}`, customer: newCustomer._id })

  const { created, updated } = await newCustomer.save()
  const { balance, number, } = await newBankAccount.save()
  const data = {
    firstName,
    lastName,
    documentInformation,
    bankAccount: {
      balance, number
    },
    created,
    updated
  }

  response(req, res, CREATED, data)
}

const getCustomers = async (req, res) => {
  const customers = await Customer.find()

  return response(req, res, OK, customers)
}

const getCustomer = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, documentInformation, created, updated } = await Customer.findById(id)
  const { balance, number } = await BankAccount.findOne({ customer: id })
  
  const data = {
    firstName,
    lastName,
    documentInformation,
    bankAccount: {
      balance, number
    },
    created,
    updated
  }

  return response(req, res, OK, data)
}

const putCustomer = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, documentInformation } = req.body
  const customer = await Customer.findByIdAndUpdate(id, { firstName, lastName, documentInformation })

  response(req, res, OK, customer)
}

module.exports = {
  postCustomers,
  getCustomers,
  getCustomer,
  putCustomer
}