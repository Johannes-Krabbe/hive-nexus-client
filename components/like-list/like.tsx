import Image from "next/image";
import { ILike } from "types/interfaces";
import smiley from "/public/assets/images/core/smiley.png";
import styles from "./like.module.scss";

export const Like = ({ username }: ILike) => {
  return (
    <div className={styles.Like}>
      <Image
        className={styles.Avatar}
        // TODO: replace
        src={smiley}
        height={24}
        width={24}
        alt={`Avatar of user ${username}`}
      />
      <p className={styles.Username}>{username}</p>
    </div>
  );
};
