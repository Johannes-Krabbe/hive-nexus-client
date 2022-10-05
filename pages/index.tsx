import type { NextPage } from 'next'

import { Sun } from '../components/index/sun/sun'
import { Hero } from '../components/core/hero/hero';
import { Tools } from 'components/index/tools/tools';

import styles from '../components/core/layout/index.module.scss'

const Home: NextPage = () => {

  const headline = 'YOUNGCASE'
	const subheadline = 'individuell autonom zielorientiert'

  const toolsHeadline = 'Tools headline lalala'
  const tools = [
    {
      'name': 'Tool1',
      'description:': 'Description Of Tool 1',
      'href': 'www.duckduckgo.com',
      'hoverColor': 'green'
    },
    {
      'name': 'Tool2',
      'description:': 'Second Description Coming here',
      'href': 'www.duckduckgo.com',
      'hoverColor': 'coral'
    },
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
        <Tools
          headline={toolsHeadline}
          tools={tools}
        />
    </div>
  )
}

export default Home
