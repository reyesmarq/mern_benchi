const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { getCustomers, getCustomer, postCustomers, putCustomer } = require('../handlers/customers'),
  { CUSTOMER_CREATE } = require('../utils/const'),
  passport = require('passport'),
  strategies = require('../auth'),
  { authError } = require('../utils/authError')

router.route('/')
  .get(passport.authenticate('jwt', { session: false, failWithError: true }), authError, getCustomers)
  .post(readingData(CUSTOMER_CREATE), validatingData, postCustomers)

router.route('/:id')
  .get(getCustomer)
  .put(putCustomer)

module.exports = router