const httpStatusCodes = {
    informational: {
        100: 'Continue: The initial part of a request has been received and the client should continue.',
        101: 'Switching Protocols: The server is switching protocols as requested by the client.',
    },
    successful: {
        200: 'OK: The request has succeeded.',
        201: 'Created: The request has been fulfilled and resulted in a new resource being created.',
        202: 'Accepted: The request has been accepted for processing, but the processing is not complete.',
        204: 'No Content: The server successfully processed the request, but is not returning any content.',
    },
    redirection: {
        301: 'Moved Permanently: The resource has been permanently moved to a new URL.',
        302: 'Found: The resource is temporarily located at a different URL.',
        304: 'Not Modified: The resource has not been modified since the last request.',
    },
    clientError: {
        400: 'Bad Request: The server could not understand the request due to invalid syntax.',
        401: 'Unauthorized: Authentication is required, and the client has not provided valid credentials.',
        403: 'Forbidden: The server understands the request, but refuses to authorize it.',
        404: 'Not Found: The server could not find the requested resource.',
        409: 'Conflict: The request could not be completed due to a conflict with the current state of the resource.',
    },
    serverError: {
        500: 'Internal Server Error: A generic error message indicating that something went wrong on the server.',
        501: 'Not Implemented: The server does not support the functionality required to fulfill the request.',
        503: 'Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.',
    },
};
