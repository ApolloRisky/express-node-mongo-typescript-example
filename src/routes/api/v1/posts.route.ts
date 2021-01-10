import { Router } from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  removePost,
} from '@controllers/posts.controllers.ts';
import postsValidation from '@validations/posts.validation';

const router = Router();

export default router
  // Get list of posts
  .get('/posts', getPosts)
  // Create a post
  .post('/posts', postsValidation.createPostValidator, createPost)
  // Update a post
  .patch('/posts/:id', postsValidation.patchUpdatePostValidator, updatePost)
  // Remove a post
  .delete('/posts/:id', postsValidation.deletePostValidator, removePost);
