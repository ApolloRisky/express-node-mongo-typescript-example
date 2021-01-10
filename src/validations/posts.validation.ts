import { checkSchema, Meta } from 'express-validator';

const createPostSchema = checkSchema(
  {
    title: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
    description: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
    body: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
  },
  ['body'],
);

const getPostSchema = checkSchema(
  {
    id: {
      errorMessage: "Field 'title' is required",
      isString: true,
    },
  },
  ['params'],
);

const patchUpdatePostSchema = checkSchema(
  {
    title: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
    description: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
    body: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
  },
  ['body'],
);

const deletePostSchema = checkSchema(
  {
    id: {
      errorMessage: (_value: unknown, { path }: Meta) =>
        `Invalid value of ${path}`,
      isString: true,
    },
  },
  ['params'],
);

export default {
  getPostValidator: getPostSchema,
  createPostValidator: createPostSchema,
  patchUpdatePostValidator: patchUpdatePostSchema,
  deletePostValidator: deletePostSchema,
};
