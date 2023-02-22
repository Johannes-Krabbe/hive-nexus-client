import { ILike } from "types/interfaces";
import { Like } from "./like";
import styles from "./like-list.module.scss";

interface LikeListProps {
  likes: ILike[];
}

export const LikeList = ({ likes }: LikeListProps) => {
  const count = likes.length;

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{count} Likes</h2>
      <div className={styles.List}>
        {likes.map((l: ILike) => {
          return <Like key={l.id} id={l.id} username={l.username} />;
        })}
      </div>
    </div>
  );
};
