const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers, putCustomer } = require('../handlers/customers')

router.route('/')
  .get(getCustomers)
  .post(readingData('create_customer'), validatingData, postCustomers)

router.route('/:id')
  .get(getCustomer)
  .put(putCustomer)

module.exports = router