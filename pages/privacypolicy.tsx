import type { NextPage } from 'next';

import { Hero } from '../components/core/hero/hero';
// import ContentBlock from '../components/legal/content-block/content-block';
import styles from '../components/core/layout/index.module.scss';

const PrivacyPolicy: NextPage = () => {
	const headline = 'PrivacyHeadline'
	const subheadline = 'Privacysubheadline'

return (
	<>
		<Hero
			headline={headline}
			subheadline={subheadline}
			/>
		<div className={styles.container}>
			PrivacyPolicy Page Coming Here
		</div>
	</>
	)
}

export default PrivacyPolicy