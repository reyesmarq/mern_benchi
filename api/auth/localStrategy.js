const
  { Strategy } = require('passport-local'),
  User = require('../models/user')

const localStrategy = new Strategy({
  usernameField: 'email'
}, async (username, password, done) => {
  try {
    let user = await User.findOne({ email: username })
    if (!user) {
      return done(null, false)
    }

    let passwordMatch = await user.matchPassword(password)
    if (!passwordMatch) {
      return done(null, false)
    }

    return done(null, user)
  } catch (err) {
    return done(err, false)
  }
})

module.exports = { localStrategy }