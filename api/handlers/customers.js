const Customer = require('../models/customer')

const postCustomers = async (req, res) => {
  const { firstName, lastName, localId, securityCode } = req.body
  /**
   * Validating existing customer with local id
   */
  const existingCustomer = await Customer.findOne({ localId })

  if (existingCustomer) {
    return res.send({ code: 409, response: 'There is a customer with this ID' })
  }

  if (securityCode.length != 4) {
    return res.send({ code: 500, response: 'Security Code must be 4 digit long' })
  } 

  /**
   * Creating a new customer
   */
  const newCustomer = new Customer({ firstName, lastName, localId, securityCode })

  /**
   * Saving the user
   */
  await newCustomer.save()
  res.send({ code: 200, response: 'Customer Created' })
}

module.exports = {
  postCustomers
}