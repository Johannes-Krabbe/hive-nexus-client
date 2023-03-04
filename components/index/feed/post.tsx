import Link from "next/link";
import { IPost } from "types/interfaces";
import { Button } from "components/button/button";
import styles from "./post.module.scss";

import { request } from 'utils/context';

export const Post = ({
  id,
  createdAt,
  author,
  title,
  content,
  // likesCount,
  // commentsCount,
}: IPost) => {

  async function deletePost(postId: string) {
    try {
      const res = await request.post(`/post/delete`, { 'postID': postId });
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
            pathname: "/post/[id]",
            query: { id: id },
          }}
        >
          {title}
        </Link>
        <div className={styles.Details}>
          <Link
            href={{
              pathname: "user/[id]",
              query: { id: author}
            }}
            >
            <p>{author}</p>
          </Link>
          {/* <p className={styles.Creation}>{createdAt}</p> */}
        </div>
      </div>
      <p className={styles.Content}>{content}</p>
      {/* TODO: delete id, just for testing purpose */}
      <p>{ id }</p>
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
            console.log(`Post ID: ${id} liked`);
          }}
        />
        <Button
          action={"button"}
          variant={"dark"}
          text={"Delete Post"}
          onClick={() => { handleDelete(id) }}
        />
        <Link
          className={styles.Anchor}
          href={{
            pathname: "/post/[id]",
            query: { id: id },
          }}
        >
          <div className={styles.Arrow} />
        </Link>
      </div>
    </div>
  );
};
