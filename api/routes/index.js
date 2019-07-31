const
  express = require('express'),
  router = express.Router(),
  customerHandlers = require('../handlers/customers')

const handleRouting = (req, res) => res.send({ response: 'routing from routing' })

router.route('/')
  .get(handleRouting)

router.route('/customers')
  .post(customerHandlers.postCustomers)

module.exports = router