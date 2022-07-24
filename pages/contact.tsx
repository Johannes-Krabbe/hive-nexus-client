import type { NextPage } from 'next'

import Hero from '../components/core/hero/hero'
// import ContactBanner from '../components/contact-banner/contact-banner'
// import ContactForm from '../components/contact/contact-form/contact-form'
// import {getClient, overlayDrafts} from "../lib/sanity.server";
// import ButtonSection from "../components/button-section/button-section"
// import {usePreview} from "../lib/hooks/usePreview";

import styles from '../components/core/layout/index.module.scss'

// export async function getStaticProps({preview = false}) {
//     const query = `*[_type == "contact"]{
//     ...,
//     "sections": sections[]{
//       ...,
//       "buttons": buttons[]{
//         ...,
//         link->
//       }
//     }
//   }`
//     const data = overlayDrafts(await getClient(preview).fetch(query))
//     return {
//         props: {
//             preview: preview,
//             data
//         },
//         revalidate: 10
//     }
// }

const Contact: NextPage = () => {

  // const {preview, data} = props
  // const {
  //     headline,
  //     subheadline,
  //     sections
  // } = data[0]

  // usePreview(preview)
  
  const headline = 'ContacttHeadline'
  const subHeadline = 'ContacttSubHeadline'
  
  return (
    <>
  	  <Hero
    	  headline={headline}
        subheadline={subHeadline}/>
        <div className={styles.Container}>
      	  Contact Page Coming Here
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
  
export default Contact