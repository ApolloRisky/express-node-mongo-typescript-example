import path from 'path';
import { config as configDotEnv } from 'dotenv';

interface IEnv {
  port: number | string;
  mongoUri: string;
  nodeEnv: 'production' | 'development' | 'staging' | 'test';
}

configDotEnv({ path: path.join(__dirname, '../../.env') });

export default {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  mongoUri: process.env.MONGODB_URI,
} as IEnv;
