import Image from 'next/image'

import styles from './employee-card.module.scss'

interface Manager {
  name: string
  position: string
  department: string
  imageUrl: string
}

export const EmployeeCard = ({name, position, department, imageUrl}: Manager) => {
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<Image
					src={imageUrl}
          className={styles.image}
          layout="responsive"
          width={242}
          height={303}
					// TODO: alt
          alt={`Picture of ${name}, working as ${position} at XY`}
          priority
					/>
      </div>
      <div className={styles.labelContainer}>
				<p className={styles.name}>
					{name}
        </p>
        <p className={styles.details}>
					{position}
					<br/>
					{department}
				</p>
			</div>
    </div>
  )
}

