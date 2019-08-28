const
  { Strategy } = require('passport'),
  { ExtractJwt } = require('passport-jwt'),
  { jwt_secret } = require('../config/keys'),
  User = require('../models/user')

const JWTStrategy = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwt_secret
}, async (payload, done) => {
  let user = await User.find
})