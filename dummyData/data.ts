import { IUser, IPost, IComment, ILike } from "types/interfaces";

export const dummyUser: IUser = {
  userID: "23452345-23452345-23452345",
  createdAt: new Date(1466424490000),
  email: "dummy@user.com",
  username: "DummyUser",
};

export const dummyPost: IPost = {
  postID: "99999",
  createdAt: new Date(1463324490000),
  username: "dennis384",
  title: "My first post here",
  content:
    "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
  // likesCount: 49,
  // commentsCount: 12,
};

export const dummyComments: IComment[] = [
  {
    commentID: "466",
    createdAt: new Date(1466424490000),
    username: "spacjalex",
    content:
      "comment hello t commentcomment comment commentcomment comment commentcomment comment commentcommenment commentcomment comment commentcomhello hello",
  },
  {
    commentID: "446",
    createdAt: new Date(1466424480000),
    username: "testuser34",
    content:
      "2nd commentment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcommenment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcommen sdfsdaf sadfsadf asdfasfd",
  },
  {
    commentID: "6",
    createdAt: new Date(1366624490000),
    username: "Chris",
    content:
      "3rd comment ment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcommensadf asdf asdf",
  },
  {
    commentID: "542",
    createdAt: new Date(1464424490000),
    username: "userxXXXX",
    content:
      "4th comment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment commentcomment comment comment",
  },
  {
    commentID: "773",
    createdAt: new Date(2466426490000),
    username: "Annemarie",
    content:
      "asdasfgsf guih sdfiuo hsfgiou hsdfgoun sdfgojnasdfgoun qewriun wdfginsagioun weijpn asgiu",
  },
  {
    commentID: "334",
    createdAt: new Date(2466424490000),
    username: "berlinRaver99",
    content:
      "sdfgsdfgfdsg dsfgdsfgdsfgdfsgdsfgfdsgfdsgfdsgfdsgdsfgdsfgdsfgdsfg sdfgdsfgdsfgdsfgfdsg dsfgsdfgdsfg",
  },
  {
    commentID: "6677",
    createdAt: new Date(1418424490000),
    username: "JaneDoe",
    content: "3rd comment sadf asdf asdf",
  },
];

export const dummyLikes: ILike[] = [
  {
    likeID: "2342234",
    username: "user1",
  },
  {
    likeID: "9393493",
    username: "JaneDoe",
  },
  {
    likeID: "999799",
    username: "Chris",
  },
  {
    likeID: "3453434",
    username: "spacjalex",
  },
  {
    likeID: "4477884",
    username: "testuser34",
  },
  {
    likeID: "6665",
    username: "hanszimmer",
  },
  {
    likeID: "665",
    username: "JohnDoe99",
  },
  {
    likeID: "6666",
    username: "octocat_11",
  },
  {
    likeID: "744",
    username: "user1",
  },
  {
    likeID: "776",
    username: "JaneDoe",
  },
  {
    likeID: "44455",
    username: "Chris",
  },
  {
    likeID: "5467",
    username: "spacjalex",
  },
  {
    likeID: "4567",
    username: "testuser34",
  },
  {
    likeID: "35522",
    username: "hanszimmer",
  },
  {
    likeID: "453",
    username: "JohnDoe99",
  },
  {
    likeID: "22233",
    username: "octocat_11",
  },
];
