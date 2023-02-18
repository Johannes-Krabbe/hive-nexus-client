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
  likesCount: number;
  commentsCount: number;
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
