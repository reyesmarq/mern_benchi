const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { postSignUp } = require('../handlers/users')

router.route('/signup')
  .post(postSignUp)

module.exports = router