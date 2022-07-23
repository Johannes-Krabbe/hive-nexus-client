import styles from './jobs-list.module.scss'

import JobPosting from '../job-posting/job-posting'

const JobsList = props => {
  const { jobs } = props
  const onlineJobs = jobs.filter(job => {
    return job.isOnline
  })

  return (
    <div className={styles.JobsList}>
      {onlineJobs.map(job => {
        return <JobPosting key={job._key} location={job.location} title={job.title} body={job.content} email={job.email} />
      })}
    </div>
  )
}

export default JobsList
