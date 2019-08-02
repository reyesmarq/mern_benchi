const
  express = require('express'),
  router = express.Router(),
  customerHandlers = require('../handlers/customers'),
  { reading, validate } = require('../utils/validator')

const handleRouting = (req, res) => res.send({ response: 'routing from routing' })

router.route('/')
  .get(handleRouting)

router.route('/customers')
  .post(reading('create_customer'), validate, customerHandlers.postCustomers)

module.exports = router