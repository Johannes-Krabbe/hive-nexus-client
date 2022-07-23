import Hero from '../components/core/hero/hero'
// import JobsList from "../components/jobs/jobs-list/jobs-list"
// import ButtonSection from "../components/button-section/button-section"
// import IntroductionTextBox from '../components/jobs/introduction-text-box/introduction-text-box'
// import { getClient, overlayDrafts } from '../lib/sanity.server'
// import { usePreview } from '../lib/hooks/usePreview'
import styles from '../components/core/layout/index.module.scss'

// export async function getStaticProps({ preview = false }) {
//   const query = `*[_type == "jobs"]{
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

const Jobs: NextPage = () => {

  // const { preview, data } = props
  // const {
  //   headline,
  //   subheadline,
  //   sections
  // } = data[0]

  // usePreview(preview)

	const headline = 'JobsHeadline'
	const subHeadline = 'JobsSubHeadline'


  return (
		<>
			<Hero
				headline={headline}
				subheadline={subHeadline}/>
			<div className={styles.Container}>
				Jobs Page Coming Here
			</div>
      {/* {sections.map(section => {
        switch (section._type) {
          case 'textSection':
            return <div className={styles.Container}><IntroductionTextBox key={section._key} introductionText={section.content[0].children[0].text}/></div>
          case 'jobSection':
            return <div className={styles.Container}><JobsList key={section._key} jobs={section.jobs} /></div>
          case 'buttonSection':
            return <ButtonSection key={section._key} buttons={section.buttons} />
        }
      })} */}
	</>
  )
}

export default Jobs
