import { EmployeeCard } from '../employee-card/employee-card'

import styles from './manager-section.module.scss'

interface Manager {
  name: string
  position: string
  department: string
  imageUrl: string
}

interface ManagerSectionProps {
  managers: Array<Manager>
}

export const ManagerSection = ({managers}: ManagerSectionProps) => {
  return (
    <div className={styles.teamSection}>
      {managers.map((m, index) => (
        <EmployeeCard
          key={index}
          name={m.name}
          position={m.position}
          department={m.department}
          imageUrl={m.imageUrl}
          />
      ))}
    </div>
  )
}
