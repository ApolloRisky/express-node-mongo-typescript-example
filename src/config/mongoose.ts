import mongoose, { Connection } from 'mongoose';

import logger from '@utils/logger';
import env from './env';

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env.nodeEnv === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
export default {
  connect: (): Connection => {
    mongoose
      .connect(env.mongoUri, {
        useCreateIndex: true,
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => console.log('MongoDB connected successfully'));

    return mongoose.connection;
  },
};
