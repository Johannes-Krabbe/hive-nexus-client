import { INavLink, IPost } from "types/interfaces";

export const postData: IPost[] = [
  {
    id: "99999",
    createdAt: "01.01.2023",
    author: "dennis384",
    title: "My first post here",
    content:
      "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
    likesCount: 49,
    commentsCount: 12,
  },
  {
    id: "828282",
    createdAt: "13.02.2023",
    author: "spacjalex",
    title: "What do you think about XY?",
    content:
      "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
    likesCount: 8,
    commentsCount: 102,
  },
  {
    id: "111111",
    createdAt: "12.02.2023",
    author: "JohnDoe1991",
    title: "Best meal ever!!!",
    content:
      "llorem ipsum lorem ipsum safasfsaf saf sadf asdf asdf asdf asdf asdf asdf asf asdf ",
    likesCount: 1732,
    commentsCount: 0,
  },
];

export const navLinks: INavLink[] = [
  {
    name: "Feed",
    path: "/",
  },
  {
    name: "NavLink 1",
    path: "/",
  },
  {
    name: "NavLink 2",
    path: "/",
  },
];
