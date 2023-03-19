import Image from "next/image";
import { IComment } from "types/interfaces";
import { getFormattedDate } from 'utils/dateHelpers'
import smiley from "/public/assets/images/core/smiley.png";

import styles from "./comment.module.scss";

export const Comment = ({ commentID, createdAt, username, content }: IComment) => {
  return (
    <div className={styles.Comment}>
      <div className={styles.DetailsBar}>
        <Image
          className={styles.Avatar}
          // TODO: replace
          src={smiley}
          height={32}
          width={32}
          alt={`Avatar of user ${username}`}
        />
        <p className={styles.Author}>{username}</p>
        <p>
          commentID: {commentID} createdAt: {getFormattedDate(createdAt)}
        </p>
      </div>
      <p className={styles.Content}>{content}</p>
    </div>
  );
};
