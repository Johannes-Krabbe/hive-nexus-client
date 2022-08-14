import type { NextPage } from 'next';

import Hero from '../components/core/hero/hero';
// import ContentBlock from '../components/legal/content-block/content-block';
// import { getClient, overlayDrafts } from '../lib/sanity.server'
// import { usePreview } from '../lib/hooks/usePreview'
import styles from '../components/core/layout/index.module.scss';

// export async function getStaticProps({ preview = false }) {
//   const query = `*[_type == "privacypolicy"]{
//     ...,
//     "sections": sections[]{
//       ...,
//       "buttons": buttons[]{
//         ...,
//         link->
//       }
//     }
//   }`

//   const data = overlayDrafts(await getClient(preview).fetch(query))

//   return {
//     props: {
//       preview: preview,
//       data,
//       revalidate: 10
//     }
//   }
// }

const PrivacyPolicy: NextPage = () => {

  // const { preview, data } = props
  // const {
  //   headline,
  //   subheadline,
  //   sections
  // } = data[0]

  // usePreview(preview)

	const headline = 'PrivacyHeadline'
	const subheadline = 'Privacysubheadline'


  return (
		<>
			<Hero
				headline={headline}
				subheadline={subheadline}/>
			<div className={styles.container}>
				PrivacyPolicy Page Coming Here
			</div>
	</>
  )
}

export default PrivacyPolicy