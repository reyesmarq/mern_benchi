const
  routes = require('express')(),
  customers = require('./customers'),
  root = require('./root'),
  apiUI = require('swagger-ui-express'),
  apiDocument = require('../config/apiDocumentation.json')

routes
.use('/doc', apiUI.serve, apiUI.setup(apiDocument, { customCss: '.swagger-ui .topbar { display: none }' }))
.use('/customers', customers)
.use('/', root)

module.exports = routes