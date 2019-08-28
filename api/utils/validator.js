const
  { check, validationResult } = require('express-validator'),
  { BAD_REQUEST } = require('../utils/resCodes'),
  { response } = require('../utils/response'),
  { CUSTOMER_CREATE, USER_SIGNUP } = require('./const')

const readingData = method => {
  switch (method) {
    case CUSTOMER_CREATE:
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
    case USER_SIGNUP:
      return [
        check('firstName')
          .not().isEmpty().withMessage('First name cannot be empty'),
        check('lastName')
          .not().isEmpty().withMessage('Last name cannot be empty'),
        check('email')
          .not().isEmpty().withMessage('Email cannot be empty')
          .isEmail().withMessage('Email field must be an email'),
        check('password')
          .not().isEmpty().withMessage('password cannot be empty')
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