import styles from './employee-section.module.scss'

function getEmojis(length) {
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

function getNames(onlineEmployees) {
  const namesArray = onlineEmployees.map(employee => {
    return employee.name
  })
  return namesArray.join(', ')
}

function getJobDescriptions(jobDescriptions) {
  let result = 'Wir sind '
  for (let i = 0; i < jobDescriptions.length; i++) {
    if (i === jobDescriptions.length - 1) {
      result += '& ' + jobDescriptions[i]
    } else if (i === jobDescriptions.length - 2) {
      result += jobDescriptions[i] + ' '
    } else {
      result += jobDescriptions[i] + ', '
    }
  }
  return result
}

const EmployeeSection = props => {
  const {
    employees,
    jobDescriptions
  } = props
  const onlineEmployees = employees.filter(employee => employee.isOnline)
  const names = getNames(onlineEmployees)
  const emojis = getEmojis(onlineEmployees.length)
  const jobs = getJobDescriptions(jobDescriptions)
  return (
    <div className={styles.Container}>
      <h1 className={styles.Ampersand}>&</h1>
      <p className={styles.Emojis} dangerouslySetInnerHTML={{__html: emojis}}></p>
      <p className={`${styles.Employees} ${styles.Text}`}>{names}</p>
      <p className={`${styles.JobDescriptions} ${styles.Text}`}>{jobs}</p>
    </div>
  )
}

export default EmployeeSection
