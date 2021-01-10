import httpStatus from 'http-status';
// import { entries, assign } from 'lodash';
// import { Error as MongooseError } from 'mongoose';
import { ErrorRequestHandler, RequestHandler } from 'express';

import env from '@config/env';
import APIError from '@utils/APIError';

export const handler: ErrorRequestHandler = (err, req, res, _next) => {
  const response = {
    code: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };

  if (env.nodeEnv !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};

export const converter: ErrorRequestHandler = (err, req, res, next) => {
  let convertedError = err;
  // TODO: handle convert known-types errors

  if (err.constructor.name === 'ValidationError') {
    convertedError = new APIError({
      message: 'Validation Error',
      errors: err,
      status: '400',
      isPublic: true,
    });
  }

  return handler(convertedError, req, res, next);
};

export const notFound: RequestHandler = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
    isPublic: false,
    errors: {},
  });
  return handler(err, req, res, next);
};
