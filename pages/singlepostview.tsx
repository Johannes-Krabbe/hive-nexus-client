import type { NextPage } from 'next'

import { Sun } from 'components/core/layout/sun/sun'
import { detailedPost } from 'lib/data/data'
import { DetailedPost } from 'components/detailed-post/detailed-post'
import { CommentList } from 'components/comment-list/comment-list'
import { LikeList } from 'components/like-list/like-list'

import styles from 'components/core/layout/index.module.scss'

const SinglePostView: NextPage = () => {
  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-peach'}
        />
      <DetailedPost
        id={detailedPost.id}
        createdAt={detailedPost.createdAt}
        author={detailedPost.author}
        title={detailedPost.title}
        content={detailedPost.content}
        />
      <div className={styles.SinglePostWrapper}>
        <CommentList
          comments={detailedPost.comments}
        />
        <LikeList
          likes={detailedPost.likes}
        />
      </div>
    </div>
  )
}

export default SinglePostView
