import data from '../../../lib/data/data.json'
import styles from './contact-banner.module.scss'

export const ContactBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactDetails}>
        <a href={`tel:${data.offices[1].phone}`}>
          {data.offices[1].phone}
        </a>
        <a href={`mailto:${data.emails.general}`} >
          {data.emails.general}
        </a>
      </div>
      <div className={styles.offices}>
        {data.offices.map((office) => (
          <div key={office.street} className={styles.office}>
            <h4>
              {office.city}
            </h4>
            <p>
              {office.street}
            </p>
            <p>
              {office.zip} {office.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
