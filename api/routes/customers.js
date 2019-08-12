const
  express = require('express'),
  router = express.Router(),
  { reading, validate } = require('../utils/validator'),
  { getCustomers, postCustomers } = require('../handlers/customers')

router.route('/')
  .get(getCustomers)
  .post(reading('create_customer'), validate, postCustomers)

router.route('/:id')
  .get()

module.exports = router