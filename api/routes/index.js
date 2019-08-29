const
  routes = require('express')(),
  customers = require('./customers'),
  users = require('./users'),
  root = require('./root'),
  apiUI = require('swagger-ui-express'),
  apiDocument = require('../config/apiDocumentation.json')

routes
  .use('/doc', apiUI.serve, apiUI.setup(apiDocument, { customCss: '.swagger-ui .topbar { display: none }' }))
  .use('/customers', customers)
  .use('/users', users)
  .use('/', root)

module.exports = routes