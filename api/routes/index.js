const
  express = require('express'),
  router = express.Router()

const handleRouting = (req, res) => res.send({ response: 'routing from routing' })

router.route('/api')
  .get(handleRouting)

module.exports = router