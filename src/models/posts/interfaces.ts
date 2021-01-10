import { Document } from 'mongoose';

export interface IPostProps {
  title: string;
  description: string;
  body: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

type TPost = Document & IPostProps;

export default TPost;
