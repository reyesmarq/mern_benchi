const
  routes = require('express')(),
  customers = require('./customers'),
  root = require('./root')

routes
.use('/customers', customers)
.use('/', root)

module.exports = routes