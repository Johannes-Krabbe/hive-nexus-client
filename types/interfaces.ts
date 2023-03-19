export interface IUser {
  userID: string;
  createdAt: Date;
  email: string;
  username: string;
}

export interface IPost {
  postID: string;
  createdAt: Date;
  // TODO: assign IUser with username prop only to username
  username: string;
  title: string;
  content: string;
  // likesCount: number;
  // commentsCount: number;
}

export interface IComment {
  commentID: string;
  createdAt: Date;
  username: string;
  content: string;
}

export interface ILike {
  likeID: string;
  username: string;
}

export interface IButton {
  action: string;
  variant: "primary" | "secondary" | "dark";
  href?: string;
  text: string;
  onClick?: () => void;
}

export interface INavLink {
  name: string;
  path: string;
}
