import Link from "next/link";
import { IPost } from "types/interfaces";
import { Button } from "components/button/button";
import { getFormattedDate } from 'utils/dateHelpers'
import styles from "./post.module.scss";

import { request } from 'utils/axios';

export const Post = ({
  postID,
  createdAt,
  username,
  title,
  content,
  // likesCount,
  // commentsCount,
}: IPost) => {
  // TODO: replace with logic check
  const isUserAuthor = true

  async function deletePost(postId: string) {
    try {
      const res = await request.post(`/post/delete`, { 'postID': postId });

      // TODO: trigger rerender
      return res
    } catch(err) {
      console.log(err)
    }
  }

  const handleDelete = async (id: string) => {
    const res = await deletePost(id);
  }

  return (
    <div className={styles.Post}>
      <div className={styles.TitleBar}>
        <Link
          className={styles.Title}
          href={{
            pathname: "/post/[postID]",
            query: { postID: postID },
          }}
        >
          {title}
        </Link>
        <div className={styles.Details}>
          <Link
            href={{
              pathname: "/user/[username]",
              query: { username: username}
            }}
            >
            <p>{username}</p>
          </Link>
          <p className={styles.Creation}>{getFormattedDate(createdAt)}</p>
        </div>
      </div>
      <p className={styles.Content}>{content}</p>
      <p>{ postID }</p>
      <div className={styles.BottomBar}>
        {/* <p className={styles.Likes}>{likesCount} 🔥</p>
        <p>{commentsCount} 💬</p> */}
      </div>
      <div className={styles.ButtonWrapper}>
        <Button
          action={"button"}
          variant={"secondary"}
          text={"Like"}
          onClick={() => {
            console.log(`Liked postID ${postID}`);
          }}
        />
        { isUserAuthor && (
            <Button
              action={"button"}
              variant={"dark"}
              text={"Delete Post"}
              onClick={() => { handleDelete(postID) }}
            />
        )}
        <Link
          className={styles.Anchor}
          href={{
            pathname: "/post/[postID]",
            query: { postID: postID },
          }}
        >
          <div className={styles.Arrow} />
        </Link>
      </div>
    </div>
  );
};
