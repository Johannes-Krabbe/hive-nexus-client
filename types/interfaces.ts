export interface IUser {
  id: string;
  createdAt: string;
  email: string;
  username: string;
  password: string;
}

export interface IPost {
  id: string;
  createdAt: string;
  // TODO: assign IUser with username prop only to author
  author: string;
  title: string;
  content: string;
}
