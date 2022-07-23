import styles from './contact-banner.module.scss'
import data from '../../lib/data/data.json'

const ContactBanner = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ContactDetails}>
        <h3>
          <a href={`tel:${data.offices[1].phone}`}>
            {data.offices[1].phone}
          </a>
        </h3>
        <h3>
          <a href={`mailto:${data.emails.general}`} >
            {data.emails.general}
          </a>
        </h3>
      </div>
      <div className={styles.Offices}>
        {data.offices.map((office) => (
          <div key={office.street} className={styles.Office}>
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

export default ContactBanner
