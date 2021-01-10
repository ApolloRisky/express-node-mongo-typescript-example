import TPost from '@models/posts/interfaces';

export interface TPostResponse {
  id?: string;
  title: string;
  description: string;
  body: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

const postSerializer = (object: TPost): TPostResponse => ({
  id: object.id,
  title: object.title,
  description: object.description,
  body: object.body,
  createdAt: object.createdAt,
  updatedAt: object.updatedAt,
});

const postCollectionSerializer = (objects: TPost[]): TPostResponse[] =>
  objects.map((object) => postSerializer(object));

export { postSerializer, postCollectionSerializer };
