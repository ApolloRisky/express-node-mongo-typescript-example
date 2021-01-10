import { Router } from 'express';
import postRoutes from './posts.route';

const router = Router();

export default router.use(postRoutes);
