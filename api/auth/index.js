const
  passport = require('passport'),
  { localStrategy } = require('./localStrategy'),
  { JWTStrategy } = require('./JWTStrategy')

passport
/**Local strategy */
  .use('local', localStrategy)
  .use('jwt', JWTStrategy)
