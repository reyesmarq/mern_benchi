const
  request = require('express')(),
  customers = require('./customers')

request.use('/customers' ,customers)

module.exports = request