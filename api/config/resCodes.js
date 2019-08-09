module.exports = {
  OK: {
    code: 200,
    description: 'ok.'
  },
  CREATED: {
    code: 201,
    description: 'The request was successfully and a resource was created.'
  },
  NO_CONTENT: {
    code: 204,
    description: 'The request was successfully but there is no representation to return.'
  },
  NOT_MODIFIED: {
    code: 304,
    description: 'Redirection not modified.'
  },
  BAD_REQUEST: {
    code: 400,
    description: 'The request could not be understood, or was missing required parameters.'
  },
  UNAUTHORIZED: {
    code: 401,
    description: `Authentication failed or user does't have permissions for requested operation.`
  },
  FORBIDDEN: {
    code: 403,
    description: 'Access denied.'
  },
  NOT_FOUND: {
    code: 404,
    description: 'Resource was not found.'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    description: 'The requested method is not supported for this resource.'
  },
  CONFLICT: {
    code: 409,
    description: 'Resolve the conflict and resubmit the request'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    description: 'Internal server error.'
  }
}