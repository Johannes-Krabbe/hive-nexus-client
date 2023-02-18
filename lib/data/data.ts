import { INavLink, IPost } from "types/interfaces";

export const detailedPost = {
  id: "99999",
  createdAt: "01.01.2023",
  author: "dennis384",
  title: "My first post here",
  content:
    "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
  likesCount: 49,
  commentsCount: 12,
  likes: [
    {
      id: "234234",
      user: "user1",
    },
    {
      id: "939393",
      user: "JaneDoe",
    },
    {
      id: "99999",
      user: "Chris",
    },
    {
      id: "343434",
      user: "spacjalex",
    },
    {
      id: "444",
      user: "testuser34",
    },
    {
      id: "11",
      user: "hanszimmer",
    },
    {
      id: "22",
      user: "JohnDoe99",
    },
    {
      id: "44444",
      user: "octocat_11",
    },
  ],
  comments: [
    {
      id: "234234",
      createdAt: "01.01.2001",
      author: "spacjalex",
      content: "comment hello hello hello",
    },
    {
      id: "234234",
      createdAt: "01.01.2001",
      author: "spacjalex",
      content: "2nd comment sdfsdaf sadfsadf asdfasfd",
    },
    {
      id: "234234",
      createdAt: "01.01.2001",
      author: "spacjalex",
      content: "3rd comment sadf asdf asdf",
    },
    {
      id: "234234",
      createdAt: "01.01.2001",
      author: "spacjalex",
      content: "4th comment asdfasdfa",
    },
  ],
};

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
    name: "Single Post Test View",
    path: "/singlepostview",
  },
  {
    name: "NavLink 2",
    path: "/",
  },
];
