const
  { Strategy, ExtractJwt } = require('passport-jwt'),
  { jwt: { secret } } = require('../config/keys'),
  User = require('../models/user')

const JWTStrategy = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}, async (payload, done) => {
  let user = await User.findById(payload.sub)
  if (!user) {
    return done(null, false)
  }

  return done(null, user)
})

module.exports = { JWTStrategy }