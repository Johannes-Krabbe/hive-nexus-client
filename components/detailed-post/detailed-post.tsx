import { Button } from "components/button/button";
import { useUser } from "lib/hooks";
import { deletePost } from 'utils/restClient'
import Router from 'next/router'
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
  const { user, setUser } = useUser()
  const isUserOwner = user.username === username

  const handleDelete = async (postID: string) => {
    deletePost(postID);

    Router.push('/')
  }
  return (
    <div className={styles.DetailedPost}>
      <h2 className={styles.Title}>{title}</h2>
      <p className={styles.Date}>{getFormattedDate(createdAt)}</p>
      <Link
        href={{
          pathname: "/user/[username]",
          query: { username: username}
        }}
        >
          <p className={styles.Author}>{username}</p>
      </Link>
      <p className={styles.Content}>{content}</p>
      <div className={styles.Wrapper}>
        <Button
          action={"button"}
          variant={"secondary"}
          text={"Like"}
          onClick={() => {
            console.log(`Like postID ${postID}`);
          }}
        />
        { isUserOwner && (
          <Button
            action={"button"}
            variant={"dark"}
            text={"Delete Post"}
            onClick={() => { handleDelete(postID) }}
            />
        )}
      </div>
    </div>
  );
};
