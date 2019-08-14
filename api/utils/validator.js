const
  { check, validationResult } = require('express-validator'),
  { BAD_REQUEST } = require('../config/resCodes'),
  { response } = require('../utils/response')

const readingData = method => {
  switch (method) {
    case 'create_customer':
      return [
        check('first_name')
          .not().isEmpty().withMessage('First name cannot be empty'),
        check('last_name')
          .not().isEmpty().withMessage('Last name cannot be empty'),
        check('document_information')
          .not().isEmpty().withMessage('Document object cannot be empty'),
        check('document_information.type')
          .not().isEmpty().withMessage('Document type cannot be empty')
          .isIn(['personal_id', 'passport']).withMessage('Document type must be \'personal_id\' or \'passport\''),
        check('document_information.number')
          .not().isEmpty().withMessage('Document number cannot be empty'),
        check('security_code')
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