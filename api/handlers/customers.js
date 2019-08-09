const
  Customer = require('../models/customer'),
  resCodes = require('../config/resCodes')

const postCustomers = async (req, res) => {
  console.log(req.body)
  const { first_name, last_name, local_id, document_information, document_information: { number } } = req.body
  /**
   * Validating existing customer with local id
   */
  const existingCustomer = await Customer.findOne({ "document_information.number": number })
  if (existingCustomer) {
    return res.send({
      code: resCodes.CONFLICT.code,
      description: resCodes.CONFLICT.description,
      response: 'There is a customer with this ID'
    })
  }

  /**
   * Creating a new customer
   */
  const newCustomer = new Customer(req.body)
  const { creation_date, last_update } = await newCustomer.save()
  res.status(201).json({
    code: resCodes.CREATED.code,
    description: resCodes.CREATED.description,
    message: 'Customer created successfully',
    data: { first_name, last_name, local_id, document_information, creation_date, last_update }
  })
}

const getCustomers = async (req, res) => {
  const customers = await Customer.find()

  res.status(200).json({
    code: resCodes.OK.code,
    description: resCodes.OK.description,
    message: 'Successfully',
    data: customers
  })
}

module.exports = {
  postCustomers,
  getCustomers
}