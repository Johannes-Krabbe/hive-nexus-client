import styles from './employee-card.module.scss'
import Image from 'next/image'

const EmployeeCard = props => {
    const {
        name = '',
        position = '',
        department = '',
        image = ''
    } = props

    return (
        <div className={styles.Card}>
            <div className={styles.cardImage}>
                <Image
                    src={image}
                    className={styles.Image}
                    layout="responsive"
                    width={242}
                    height={303}
                    alt={`Picture of ${name}, working as ${position} at Peaks and Pies`}
                    priority/>
            </div>
            <div className={styles.LabelContainer}>
                <p className={styles.Name}>
                    {name}
                </p>
                <p className={styles.Details}>
                    {position}<br/>{department}
                </p>
            </div>
        </div>
    )
}

export default EmployeeCard
