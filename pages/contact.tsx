import type { NextPage } from 'next';

import { Hero } from '../components/core/hero/hero';
import { ContactBanner } from '../components/contact/contact-banner/contact-banner';
import { ContactForm } from '../components/contact/contact-form/contact-form';

import styles from '../components/core/layout/index.module.scss';

const Contact: NextPage = () => {
	const headline = 'ContactHeadline'
	const subheadline = 'ContactSubheadline'

	return (
		<>
			<Hero
				headline={headline}
        subheadline={subheadline}
				/>
			<div className={styles.container}>
				<ContactBanner />
			</div>
			<div className={styles.container}>
				<ContactForm />
			</div>
    </>
  )
}

export default Contact;