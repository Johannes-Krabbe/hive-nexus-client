import { Button } from "components/button/button";
import styles from "./detailed-post.module.scss";

interface DetailedPostProps {
  id: string;
  createdAt: string;
  author: string;
  title: string;
  content: string;
}

export const DetailedPost = ({
  id,
  createdAt,
  author,
  title,
  content,
}: DetailedPostProps) => {
  return (
    <div className={styles.DetailedPost}>
      <h2 className={styles.Title}>{id} {title}</h2>
      {/* TODO: Link to userpage */}
      <p className={styles.Author}>{author}</p>
      <p className={styles.Date}>{createdAt}</p>
      <p className={styles.Content}>{content}</p>
      <Button
        action={"button"}
        variant={"secondary"}
        text={"Like"}
        onClick={() => {
          console.log(`Post ID: ${id} liked`);
        }}
      />
    </div>
  );
};
