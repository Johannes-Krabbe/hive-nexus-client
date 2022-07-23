import Hero from '../components/core/hero/hero'
// import ManagersSection from '../components/team/manager-section/manager-section'
// import EmployeeSection from "../components/team/employee-section/employee-section";
// import ButtonSection from "../components/button-section/button-section";
// import {getClient, overlayDrafts} from "../lib/sanity.server";
// import {usePreview} from "../lib/hooks/usePreview";
import styles from '../components/core/layout/index.module.scss'

// export async function getStaticProps({preview = false}) {
//     const query = `*[_type == "team"]{
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
//             data,
//             revalidate: 10
//         }
//     }
// }

const Team: NextPage = () => {

	// const {preview, data} = props
  // const {
  //   headline,
  //   subheadline,
  //   sections
  // } = data[0]

  // usePreview(preview)

	const headline = 'Teamheadline'
	const subHeadline = 'TeamsubHeadline'


  return (
		<>
			<Hero
				headline={headline}
				subheadline={subHeadline}/>
			<div className={styles.Container}>
				Team Page Coming Here
			</div>
			{/* {sections.map(section => {
					switch (section._type) {
							case 'ceoSection':
									return <div className={styles.Container}><ManagersSection key={section._key} managers={section.ceos}/></div>
							case 'employeeSection':
									return <div className={styles.Container}><EmployeeSection key={section._key} employees={section.employees}
																																						jobDescriptions={section.jobDescriptions}/></div>
							case 'buttonSection':
									return <ButtonSection key={section._key} buttons={section.buttons}/>
					}
			})} */}
	</>
  )
}

export default Team
