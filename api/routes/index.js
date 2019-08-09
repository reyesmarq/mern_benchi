const
  routes = require('express')(),
  customers = require('./customers'),
  root = require('./root')

routes
  .use('/', root)
  .use('/customers', customers)

module.exports = routes