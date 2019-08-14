const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers } = require('../handlers/customers')

router.route('/')
  .get(getCustomers)
  .post(readingData('create_customer'), validatingData, postCustomers)

router.route('/:id')
  .get(getCustomer)

module.exports = router