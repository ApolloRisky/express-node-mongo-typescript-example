import httpStatus from 'http-status';
import { RequestHandler } from 'express';

import Posts from '@models/posts';
import APIError from '@utils/APIError';

const removePost: RequestHandler = async (req, res, next) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);

    if (!post) {
      throw new APIError({
        status: httpStatus.NOT_FOUND,
        message: 'Resource not found',
        isPublic: false,
        errors: {},
      });
    }
    return res.json({ deleted: { post: post.id } });
  } catch (error) {
    next(error);
  }
};

export default removePost;
