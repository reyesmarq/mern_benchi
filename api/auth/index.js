const
  passport = require('passport'),
  { localStrategy } = require('./localStrategy')

passport
/**Local strategy */
  .use('local', localStrategy)
