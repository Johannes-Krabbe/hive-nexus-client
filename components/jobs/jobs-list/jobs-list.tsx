import styles from './jobs-list.module.scss'

import JobPosting from '../job-posting/job-posting'

interface Job {
  location: string
  title: string
  content: string
  email: string
}

interface JobsProps {
  jobs: Array<Job>
}

export const JobsList = ({jobs}: JobsProps) => {
  return (
    <div className={styles.jobsList}>
      {jobs.map((job, index) => {
        return <JobPosting
          key={index}
          location={job.location}
          title={job.title}
          body={job.content}
          email={job.email}
          />
      })}
    </div>
  )
}