import Link from "next/link";
import { IPost } from "types/interfaces";
import { Button } from "components/button/button";
import { getFormattedDate } from 'utils/dateHelpers'
import styles from "./post.module.scss";

export const Post = ({
  id,
  createdAt,
  author,
  title,
  content,
  // likesCount,
  // commentsCount,
}: IPost) => {
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
          <p className={styles.Creation}>{getFormattedDate(createdAt)}</p>
          {/* <p>{ id }</p> */}
        </div>
      </div>
      <p className={styles.Content}>{content}</p>
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
            console.log(`Liked postId ${id}`);
          }}
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
