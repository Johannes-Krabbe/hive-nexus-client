import type { NextPage } from 'next'

import { Hero } from '../components/core/hero/hero';
import { ManagerSection } from '../components/team/manager-section/manager-section'
import { EmployeeSection } from "../components/team/employee-section/employee-section";

import styles from '../components/core/layout/index.module.scss';

const Team: NextPage = () => {
	const headline = 'Teamheadline'
	const subheadline = 'Teamsubheadline'

	const managers = [{
		'name': 'Maria',
		'position': 'Boss',
		'department': 'Pflege',
		'imageUrl': '/assets/images/employees/placeholder.png',
	},
	{
		'name': 'Sinan',
		'position': 'Chef Stv.',
		'department': 'Aussendienst',
		'imageUrl': '/assets/images/employees/placeholder.png',
	}]

	const employeeNames = [
		'Alex',
		'Clara',
		'Helene',
		'Peter',
		'Fritz',
		'Sandra'
	]

	const jobTitles = [
		'Chämifeger',
		'Pfleger',
		'Assistent',
		'Webentwickler',
		'Putzequipe'
	]

	return (
		<>
			<Hero
				headline={headline}
				subheadline={subheadline}/>
			<div className={styles.container}>
				<ManagerSection
					managers={managers}
					/>
				<EmployeeSection
					employeeNames={employeeNames}
					jobTitles={jobTitles}
					/>
			</div>
	</>
  )
}

export default Team
