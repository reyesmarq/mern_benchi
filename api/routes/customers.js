const
  express = require('express'),
  router = express.Router(),
  { reading, validate } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers } = require('../handlers/customers')

router.route('/')
  .get(getCustomers)
  .post(reading('create_customer'), validate, postCustomers)

router.route('/:id')
  .get(getCustomer)

module.exports = router