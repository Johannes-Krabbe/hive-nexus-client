import type { NextPage } from 'next'

import Hero from '../components/core/hero/hero'
// import ContentBlock from '../components/legal/content-block/content-block';
// import { getClient, overlayDrafts } from '../lib/sanity.server'
// import { usePreview } from '../lib/hooks/usePreview'
import styles from '../components/core/layout/index.module.scss'

// export async function getStaticProps({ preview = false }) {
//   const query = `*[_type == "imprint"]{
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

const Imprint: NextPage = () => {

  // const { preview, data } = props
  // const {
  //   headline,
  //   subheadline,
  //   sections
  // } = data[0]

  // usePreview(preview)

	const headline = 'ImprintHeadline'
	const subHeadline = 'ImprintSubHeadline'


  return (
		<>
			<Hero
				headline={headline}
				subheadline={subHeadline}/>
			<div className={styles.Container}>
				Imprint Page Coming Here
			</div>
      {/* {sections.map(section => {
        switch (section._type) {
          case 'textSection':
            return (
              <div className={styles.Container}>
                <ContentBlock key={section._key} body={section.content} />
              </div>
            )
        }
      })} */}
	</>
  )
}

export default Imprint
