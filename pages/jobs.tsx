import type { NextPage } from 'next';

import { Hero } from '../components/core/hero/hero';
import { IntroductionTextBox } from '../components/jobs/introduction-text-box/introduction-text-box'
// import { JobsList } from "../components/jobs/jobs-list/jobs-list"
// import ButtonSection from "../components/button-section/button-section"
import styles from '../components/core/layout/index.module.scss';


const Jobs: NextPage = () => {
	const headline = 'JobsHeadline'
	const subheadline = 'Jobssubheadline'

  const intro: string = 'Hallo zusammen... blablabla. Wir sind ein cooles Unternehmen und suchen gute Leute. Wir haben derzeit folgende Vakanzen zu besetzen:'

  // const jobs = [{
  //     'location': 'Winterthur',
  //     'title': 'Pfleger',
  //     'content': 'content coming here',
  //     'email': 'pfleger@test.com'
  //   },
  //   {
  //     'location': 'Winterthur',
  //     'title': 'Hauswart',
  //     'content': 'content hauswart coming here',
  //     'email': 'hauswart@test.com'
  //   }
  // ]

  return (
		<>
			<Hero
				headline={headline}
				subheadline={subheadline}
        />
			<div className={styles.container}>
        <IntroductionTextBox introductionText={intro}/>
        {/* <JobsList jobs={jobs} /> */}
			</div>
    </>
  )
}

export default Jobs