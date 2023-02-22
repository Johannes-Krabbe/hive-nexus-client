import Link from "next/link";
import { IPost } from "types/interfaces";
import { Button } from "components/button/button";
import styles from "./post.module.scss";

export const Post = ({
  id,
  createdAt,
  author,
  title,
  content,
  likesCount,
  commentsCount,
}: IPost) => {
  return (
    <div className={styles.Post}>
      <div className={styles.TitleBar}>
        <Link
          className={styles.Title}
          href={{
            pathname: "/posts/[id]",
            query: { id: id },
          }}
        >
          {title}
        </Link>
        <div className={styles.Details}>
          <p>{author}</p>
          <p className={styles.Creation}>{createdAt}</p>
        </div>
      </div>
      <p className={styles.Content}>{content}</p>
      <div className={styles.BottomBar}>
        <p className={styles.Likes}>{likesCount} 🔥</p>
        <p>{commentsCount} 💬</p>
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
        <a className={styles.Details} href={"/singlepostview"}>
          See details
        </a>
      </div>
    </div>
  );
};
