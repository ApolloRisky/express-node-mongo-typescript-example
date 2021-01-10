import { RequestHandler } from 'express';

import Posts from '@models/posts';
import Pagination, { TPaginatedParsedReqQuery } from '@utils/Pagination';
import { postCollectionSerializer } from '@serializers/posts.serializer';

const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const pagi = new Pagination(
      (req.query as unknown) as TPaginatedParsedReqQuery,
    );
    const [posts, total] = await Promise.all([
      Posts.find().skip(pagi.skipCount).limit(pagi.pageSize),
      Posts.count(),
    ]);
    return res.json(pagi.paginate(postCollectionSerializer(posts), total));
  } catch (error) {
    next(error);
  }
};

export default getPosts;
