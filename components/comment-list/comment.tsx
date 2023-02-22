import Image from "next/image";
import { IComment } from "types/interfaces";
import smiley from "/public/assets/images/core/smiley.png";

import styles from "./comment.module.scss";

export const Comment = ({ id, createdAt, author, content }: IComment) => {
  return (
    <div className={styles.Comment}>
      <div className={styles.DetailsBar}>
        <Image
          className={styles.Avatar}
          // TODO: replace
          src={smiley}
          height={32}
          width={32}
          alt={`Avatar of user ${author}`}
        />
        <p className={styles.Author}>{author}</p>
        <p>
          id: {id} createdAt: {createdAt}
        </p>
      </div>
      <p className={styles.Content}>{content}</p>
    </div>
  );
};
