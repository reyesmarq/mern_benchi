const Customer = require('../models/customer')

const postCustomers = async (req, res) => {
  const { first_name, last_name, local_id, security_code } = req.body
  /**
   * convention
   * res.status(code).json({})
   */

  /**
   * Validating existing customer with local id
   */
  const existingCustomer = await Customer.findOne({ local_id })

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
  res.status(200).json({ message: 'Customer created successfully', data: { first_name, last_name, local_id, creation_date, last_update } })
}

module.exports = {
  postCustomers
}