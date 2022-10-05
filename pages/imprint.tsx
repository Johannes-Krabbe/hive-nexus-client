import type { NextPage } from 'next'

import { Hero } from '../components/core/hero/hero'
import { ContentBlock } from '../components/legal/content-block/content-block';
import styles from '../components/core/layout/index.module.scss'

const Imprint: NextPage = () => {
	const headline = 'ImprintHeadline'
	const subheadline = 'Imprintsubheadline'

	const contentBlocks = [{
		'title': 'YOUNGCASE GmbH',
		'paragraphs': [
			'hello@email.com'
		]
	},
	{
		'title': 'Standort Winterthur',
		'paragraphs': [
			'Turmstr. 44',
			'8400 Winti',
			'+41 643 34 34'
		]
	},
	{
		'title': 'Vertretungsberechtigte Geschäftsführer',
		'paragraphs': [
			'Maria, Sinan'
		]
	},
	{
		'title': 'Handelsregister',
		'paragraphs': [
			'Amtsgericht Blabla, HR245435345'
		]
	},
	{
		'title': 'Umsatzsteuer-Identifikationsnummer(n)',
		'paragraphs': [
			'CH3245345435'
		]
	},
	{
		'title': 'Verantwortlich gemäß § 18 MStV',
		'paragraphs': [
			'Maria',
			'Blastrasse 888',
			'8400 Winti'
		]
	}
]

  return (
		<>
			<Hero
				headline={headline}
				subheadline={subheadline}
				/>
			<div className={styles.container}>
				{contentBlocks.map((c, index) => (
					<ContentBlock
						key={index}
						title={c.title}
						paragraphs={c.paragraphs}
						/>
				))}
			</div>
		</>
  )
}

export default Imprint
