const Customer = require('../models/customer')

const postCustomers = async (req, res) => {
  console.log(req.body)
  const { first_name, last_name, local_id, document_information, document_information: { number } } = req.body
  /**
   * Validating existing customer with local id
   */

  const existingCustomer = await Customer.findOne({ "document_information.number": number })

  if (existingCustomer) {
    return res.send({ code: 409, response: 'There is a customer with this ID' })
  }

  /**
   * Creating a new customer
   */
  const newCustomer = new Customer(req.body)

  /**
   * Saving the user
   */
  const { creation_date, last_update } = await newCustomer.save()
  res.status(200).json({
    message: 'Customer created successfully',
    data: { first_name, last_name, local_id, document_information, creation_date, last_update }
  })
}

module.exports = {
  postCustomers
}