const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers, putCustomer } = require('../handlers/customers'),
  { CUSTOMER_CREATE } = require('../utils/const')

router.route('/')
  .get(getCustomers)
  .post(readingData(CUSTOMER_CREATE), validatingData, postCustomers)

router.route('/:id')
  .get(getCustomer)
  .put(putCustomer)

module.exports = router