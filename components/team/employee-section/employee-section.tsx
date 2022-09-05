import styles from './employee-section.module.scss'

function getEmojis(length: number) {
  let result = ''
  const halfCount = Math.floor(length / 2) - 1

  for (let i = 0; i < length; i++) {
    if (i === 3) {
      result += '🤓'
    } else if (i === halfCount) {
      result += '<br>'
    } else if (i % 2 === 0) {
      result += '🙃'
    } else if (i % 2 !== 0) {
      result += '🙂'
    }
  }

  return result.trimEnd()
}

function getJobTitlesText(jobTitles: Array<string>) {
  let result = 'Wir sind '

  for (let i = 0; i < jobTitles.length; i++) {
    if (i === jobTitles.length - 1) {
      result += '& ' + jobTitles[i]
    } else if (i === jobTitles.length - 2) {
      result += jobTitles[i] + ' '
    } else {
      result += jobTitles[i] + ', '
    }
  }

  return result
}

interface EmployeeSectionProps {
  employeeNames: Array<string>
  jobTitles: Array<string>
}

export const EmployeeSection = ({employeeNames, jobTitles}: EmployeeSectionProps) => {
  
  const emojis = getEmojis(employeeNames.length)
  const jobTitlesText = getJobTitlesText(jobTitles)

  return (
    <div className={styles.container}>
      <h1 className={styles.ampersand}>
        &
      </h1>
      <p className={styles.emojis} dangerouslySetInnerHTML={{__html: emojis}}>
      </p>
      <p className={`${styles.employees} ${styles.text}`}>
        {employeeNames.join(', ')}
      </p>
      <p className={`${styles.jobTitles} ${styles.text}`}>
        {jobTitlesText}
      </p>
    </div>
  )
}
