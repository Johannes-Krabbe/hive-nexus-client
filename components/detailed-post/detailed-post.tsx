import { Button } from "components/button/button";
import Link from "next/link";
import { getFormattedDate } from 'utils/dateHelpers'
import { IPost } from "types/interfaces";
import styles from "./detailed-post.module.scss";

export const DetailedPost = ({
  postID,
  createdAt,
  username,
  title,
  content,
}: IPost) => {
  return (
    <div className={styles.DetailedPost}>
      <h2 className={styles.Title}>{postID} {title}</h2>
      <p className={styles.Date}>{getFormattedDate(createdAt)}</p>
      <Link
        href={{
          pathname: "user/[username]",
          query: { username: username}
        }}
        >
          <p className={styles.Author}>{username}</p>
      </Link>
      <p className={styles.Content}>{content}</p>
      <Button
        action={"button"}
        variant={"secondary"}
        text={"Like"}
        onClick={() => {
          console.log(`Liked postID ${postID}`);
        }}
      />
    </div>
  );
};
