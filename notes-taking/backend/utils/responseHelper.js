class ResponseHelper {
  static success(res, data, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, message = 'Error', statusCode = 500, error = null) {
    const response = {
      success: false,
      message
    };

    if (error && process.env.NODE_ENV === 'development') {
      response.error = error;
    }

    return res.status(statusCode).json(response);
  }

  static notFound(res, message = 'Resource not found') {
    return res.status(404).json({
      success: false,
      message
    });
  }

  static badRequest(res, message = 'Bad request', errors = null) {
    const response = {
      success: false,
      message
    };

    if (errors) {
      response.errors = errors;
    }

    return res.status(400).json(response);
  }

  static unauthorized(res, message = 'Unauthorized') {
    return res.status(401).json({
      success: false,
      message
    });
  }

  static forbidden(res, message = 'Forbidden') {
    return res.status(403).json({
      success: false,
      message
    });
  }
}

module.exports = ResponseHelper;