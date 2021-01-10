/* eslint-disable max-classes-per-file */
import httpStatus from 'http-status';

interface IExtendableErrorConstructor {
  message: string;
  errors: unknown;
  isPublic: boolean;
  status: string | number;
}

interface IAPIErrorConstructor extends IExtendableErrorConstructor {}

class ExtendableError extends Error {
  errors: unknown;
  status: string | number;
  isPublic: boolean;
  isOperational: boolean;

  constructor({
    message,
    errors,
    status,
    isPublic,
  }: IExtendableErrorConstructor) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    isPublic = false,
    status = httpStatus.INTERNAL_SERVER_ERROR,
  }: IAPIErrorConstructor) {
    super({
      message,
      errors,
      status,
      isPublic,
    });
  }
}

export default APIError;
