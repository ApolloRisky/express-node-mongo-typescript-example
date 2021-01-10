import { model } from 'mongoose';

import schema from './schema';
import IPost from './interfaces';

export default model<IPost>('Posts', schema);
