const
  Customer = require('../models/customer'),
  BankAccount = require('../models/bankAccount'),
  { OK, CONFLICT, CREATED } = require('../config/resCodes'),
  { response } = require('../utils/response'),
  resCodes = require('../config/resCodes')

const postCustomers = async (req, res) => {
  const { first_name, last_name, document_information } = req.body
  /**
   * Validating existing customer with local id
   */
  const existingCustomer = await Customer.findOne({ "document_information.number": document_information.number })
  if (existingCustomer) {
    return response(req, res, CONFLICT, null, 'There is a customer with this ID')
  }

  const newCustomer = new Customer(req.body)
  const newBankAccount = new BankAccount({ number: `${Math.round(Math.random() * 100000)}`, customer: newCustomer._id })

  const { creation_date, last_update } = await newCustomer.save()
  const { balance, number, } = await newBankAccount.save()
  const data = {
    first_name,
    last_name,
    document_information,
    bank_account: {
      balance, number
    },
    creation_date,
    last_update
  }

  response(req, res, CREATED, data)
}

const getCustomers = async (req, res) => {
  const customers = await Customer.find()

  return response(req, res, resCodes.OK, customers)
}

const getCustomer = async (req, res) => {
  const { id } = req.params
  const { first_name, last_name, document_information, creation_date, last_update } = await Customer.findById(id)
  const { balance, number } = await BankAccount.findOne({ customer: id })
  
  const data = {
    first_name,
    last_name,
    document_information,
    bank_account: {
      balance, number
    },
    creation_date,
    last_update
  }

  return response(req, res, OK, data)
}

const putCustomer = async (req, res) => {
  const { id } = req.params
  const { first_name, last_name, document_information } = req.body
  const customer = await Customer.findByIdAndUpdate(id, { first_name, last_name, document_information })

  res.json(customer)
}

module.exports = {
  postCustomers,
  getCustomers,
  getCustomer,
  putCustomer
}