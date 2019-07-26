const
  express = require('express'),
  morgan = require('morgan'),
  app = express()

const handleRouting = (req, res) => res.send({ response: 'routing' })

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
  .use('/', handleRouting)
  /**
   * public
   */
  .use(express.static(`${__dirname}/public`))

  /**
   * Server
   */
  .listen(app.get('port'), () => console.log(`api server running at port ${app.get('port')}`))
// module.exports = app