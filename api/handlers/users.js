const
  User = require('../models/user'),
  { CREATED, CONFLICT } = require('../utils/resCodes'),
  { response } = require('../utils/response')

/**
 * The sign up would not be possible through user, but through client.
 * The super administrator on client would be capable of create new users, so then can sign in
 */
const postSignUp = async (req, res) => {
  let { firstName, lastName, email, password } = req.body

  /**Validating if Existing user exist */
  let existingUser = await User.findOne({ email })
  if (existingUser) {
    return response(req, res, CONFLICT, null, 'There is a user associated with this email')
  }

  let newUser = new User(req.body)
  let { created, updated } = newUser.save()
  let data = {
    firstName,
    lastName,
    email,
    created,
    updated
  }
  return response(req, res, CREATED, data)
}

const postSignIn = async (req, res) => {
  res.json({ msg: 'signin completed here is the token...just kidding' })
}

module.exports = {
  postSignUp,
  postSignIn
}