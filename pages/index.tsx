import type { NextPage } from 'next'

import { Sun } from '../components/index/sun/sun'
import { Hero } from '../components/core/hero/hero';
import { PostList } from '../components/feed/post-list'

import { IPost } from '../types/interfaces'

import styles from '../components/core/layout/index.module.scss'

const Home: NextPage = () => {

  const headline = 'hivenexus'
	const subheadline = 'Posts:'

  const postData: IPost[] = [
    {
      id: '213324',
      createdAt: '13.12.1992',
      author: 'spacjalex',
      title: 'hello world',
      content: 'lorem ipsum lorem ipsum'
    },
    {
      id: '213324',
      createdAt: '13.12.1992',
      author: 'spacjalex',
      title: 'hello world',
      content: 'lorem ipsum lorem ipsum'
    },
    {
      id: '213324',
      createdAt: '13.12.1992',
      author: 'spacjalex',
      title: 'hello world',
      content: 'lorem ipsum lorem ipsum'
    }
  ]

  return (
    <div className={styles.container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero
        headline={headline}
        subheadline={subheadline}
        />
        <PostList posts={postData} />
    </div>
  )
}

export default Home
