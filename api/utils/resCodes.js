module.exports = {
  OK: {
    code: 200,
    status: 'OK',
    description: 'Ok.'
  },
  CREATED: {
    code: 201,
    status: 'CREATED',
    description: 'The request was successfully and a resource was created.'
  },
  NO_CONTENT: {
    code: 204,
    status: 'NO_CONTENT',
    description: 'The request was successfully but there is no representation to return.'
  },
  NOT_MODIFIED: {
    code: 304,
    status: 'NOT_MODIFIED',
    description: 'Redirection not modified.'
  },
  BAD_REQUEST: {
    code: 400,
    status: 'BAD_REQUEST',
    description: 'The request could not be understood, or was missing required parameters.'
  },
  UNAUTHORIZED: {
    code: 401,
    status: 'UNAUTHORIZED',
    description: `Authentication failed or user does't have permissions for requested operation.`
  },
  FORBIDDEN: {
    code: 403,
    status: 'FORBIDDEN',
    description: 'Access denied.'
  },
  NOT_FOUND: {
    code: 404,
    status: 'NOT_FOUND',
    description: 'Resource was not found.'
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    status: 'METHOD_NOT_ALLOWED',
    description: 'The requested method is not supported for this resource.'
  },
  CONFLICT: {
    code: 409,
    status: 'CONFLICT',
    description: 'Resolve the conflict and resubmit the request'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    status: 'INTERNAL_SERVER_ERROR',
    description: 'Internal server error.'
  }
}