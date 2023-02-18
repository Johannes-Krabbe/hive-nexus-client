import { ILike } from 'types/interfaces'
import styles from './like.module.scss'

export const Like = ({
    id,
    user
  }: ILike) => {
  return (
    <div className={styles.Like}>
      <div className={styles.Avatar} />
      <div className={styles.Details}>
        <p>id: {id}</p>
        <p className={styles.User}>{user}</p>
      </div>
    </div>
  )
}
