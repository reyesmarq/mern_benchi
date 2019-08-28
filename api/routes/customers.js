const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers, putCustomer } = require('../handlers/customers'),
  { CREATE_CUSTOMER } = require('../utils/conts')

router.route('/')
  .get(getCustomers)
  .post(readingData(CREATE_CUSTOMER), validatingData, postCustomers)

router.route('/:id')
  .get(getCustomer)
  .put(putCustomer)

module.exports = router