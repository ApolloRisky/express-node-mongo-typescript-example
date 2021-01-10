import { RequestHandler } from 'express';

import Posts from '@models/posts';
import { postSerializer } from '@serializers/posts.serializer';

const createPost: RequestHandler = async (req, res, next) => {
  try {
    const post = new Posts(req.body);
    const newPost = await post.save();
    return res.json({ item: postSerializer(newPost) });
  } catch (error) {
    next(error);
  }
};

export default createPost;
