import type { NextPage } from 'next'

import { Hero } from '../components/core/hero/hero'
// import ContentBlock from '../components/legal/content-block/content-block';
import styles from '../components/core/layout/index.module.scss'

const Imprint: NextPage = () => {
	const headline = 'ImprintHeadline'
	const subheadline = 'Imprintsubheadline'

  return (
		<>
			<Hero
				headline={headline}
				subheadline={subheadline}
				/>
			<div className={styles.container}>
				Imprint Page Coming Here
			</div>
		</>
  )
}

export default Imprint
