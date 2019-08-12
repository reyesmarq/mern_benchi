module.exports = {
  OK: {
    code: 200,
    message: 'ok.'
  },
  CREATED: {
    code: 201,
    message: 'The request was successfully and a resource was created.'
  },
  NO_CONTENT: {
    code: 204,
    message: 'The request was successfully but there is no representation to return.'
  },
  NOT_MODIFIED: {
    code: 304,
    message: 'Redirection not modified.'
  },
  BAD_REQUEST: {
    code: 400,
    message: 'The request could not be understood, or was missing required parameters.'
  },
  UNAUTHORIZED: {
    code: 401,
    message: `Authentication failed or user does't have permissions for requested operation.`
  },
  FORBIDDEN: {
    code: 403,
    message: 'Access denied.'
  },
  NOT_FOUND: {
    code: 404,
    message: 'Resource was not found.'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    message: 'The requested method is not supported for this resource.'
  },
  CONFLICT: {
    code: 409,
    message: 'Resolve the conflict and resubmit the request'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'Internal server error.'
  }
}