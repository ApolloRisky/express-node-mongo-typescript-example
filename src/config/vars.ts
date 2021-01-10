import env from './env';

export const morganLogFormat =
  env.nodeEnv === 'production' ? 'combined' : 'dev';
