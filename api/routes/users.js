const
  express = require('express'),
  router = express.Router(),
  { readingData, validatingData } = require('../utils/validator'),
  { postSignUp, postSignIn } = require('../handlers/users'),
  passport = require('passport'),
  strategies = require('../auth'),
  { authError } = require('../utils/authError'),
  { USER_SIGNUP } = require('../utils/const')

router.route('/signup')
  .post(readingData(USER_SIGNUP), validatingData, postSignUp)

router.route('/signin')
  .post(passport.authenticate('local', { session: false, failWithError: true }), authError, postSignIn)

module.exports = router