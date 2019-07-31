const
  express = require('express'),
  morgan = require('morgan'),
  app = express(),
  router = require('./routes')

app
  /**
   * Settings
   */
  .set('port', process.env.PORT || 3000)
  /**
   * Middlewares
   */
  .use(morgan('dev'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  /**
   * Routes
   */
  .use('/api', router)
  /**
   * public
   */
  .use(express.static(`${__dirname}/public`))

module.exports = app