const
  { check, validationResult } = require('express-validator'),
  { BAD_REQUEST } = require('../utils/resCodes'),
  { response } = require('../utils/response'),
  { CREATE_CUSTOMER } = require('./const')

const readingData = method => {
  switch (method) {
    case CREATE_CUSTOMER:
      return [
        check('firstName')
          .not().isEmpty().withMessage('First name cannot be empty'),
        check('lastName')
          .not().isEmpty().withMessage('Last name cannot be empty'),
        check('documentInformation')
          .not().isEmpty().withMessage('Document information object cannot be empty'),
        check('documentInformation.type')
          .not().isEmpty().withMessage('Document type cannot be empty')
          .isIn(['id', 'passport']).withMessage('Document type must be \'id\' or \'passport\''),
        check('documentInformation.number')
          .not().isEmpty().withMessage('Document number cannot be empty'),
        check('securityCode')
          .not().isEmpty().withMessage('Security code cannot be empty')
          .isLength({ min: 4, max: 4 }).withMessage('Security code must be 4 digit long'),
      ]
  }
}

const validatingData = (req, res, next) => {
  
  const formattedErrors = ({ location, msg, param }) => {
    return {
      message: msg,
      location,
      param
    }
  }

  const errors = validationResult(req).formatWith(formattedErrors)

  if (!errors.isEmpty()) {
    return response(req, res, BAD_REQUEST, null, errors.array())
  }

  next()
}

module.exports = { readingData, validatingData }