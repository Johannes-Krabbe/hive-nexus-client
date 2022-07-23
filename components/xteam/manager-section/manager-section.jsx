import styles from './manager-section.module.scss'
import urlFor from '../../../lib/urlFor'
import EmployeeCard from '../employee-card/employee-card'

const ManagerSection = props => {
  const {
    managers
  } = props
  const onlineManagers = managers.filter(manager => manager.isOnline)

  return (
      <div className={styles.TeamSection}>
        {
          onlineManagers.map((manager) => (
            <EmployeeCard
              key={manager._key}
              name={manager.name}
              position={manager.role}
              department={manager.specialization}
              image={urlFor(manager.image).url()}
            />
          ))
        }
      </div>
  )
}

export default ManagerSection
