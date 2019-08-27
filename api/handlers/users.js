const
  User = require('../models/user'),
  { CREATED, CONFLICT } = require('../config/resCodes'),
  { response } = require('../utils/response')

/**
 * The sign up would not be possible through user, but through client.
 * The super administrator on client would be capable of create new users, so then can sign in
 */
const postSignUp = async (req, res) => {
  let { first_name, last_name, email, password } = req.body

  /**Validating if Existing user exist */
  let existingUser = await User.findOne({ email })
  if (existingUser) {
    return response(req, res, CONFLICT, null, 'There is a user associated with this email')
  }

  let newUser = new User(req.body)
  let { creation_date, last_update } = newUser.save()
  let data = {
    first_name,
    last_name,
    email,
    creation_date,
    last_update
  }
  return response(req, res, CREATED, data)
}

const postSignIn = async (req, res) => {
  
}

module.exports = {
  postSignUp
}