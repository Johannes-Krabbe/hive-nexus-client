import styles from './job-posting.module.scss'
import { useState } from "react";
import Button from "../../button/button";
import PortableText from 'react-portable-text'

const JobPosting = props => {
  const [contentOpen, setContentOpen] = useState(false)
  const [scrollHeight, setScrollHeight] = useState('0px')
  const {
    location = '',
    title = '',
    body = '',
    email = '',
  } = props

  const [readMore, setReadMore] = useState(true)

  const toggleContent = (e) => {
    setContentOpen(!contentOpen)
    if (!contentOpen) {
      setScrollHeight(`${e.target.nextSibling.scrollHeight}px`)
    } else {
      setScrollHeight('0px')
    }
  }
  const renderNormalTypography = props => <p>{ props.children }</p>
  const renderHeading = props => <h3>{ props.children }</h3>

  /** Find the index of the “readMore” block */
  const findReadMoreIndex = body?.findIndex(
      ({ _type, style }) => _type === "break" && style === "readMore"
  )

  /** Slice the array to the (first) readMore block */
  const blocks = findReadMoreIndex > -1 ?
      readMore ? body.slice(0, findReadMoreIndex + 1) : body :
      body


  return (
    <section className={styles.container}>
      <div className={!contentOpen ? styles.toggle : `${styles.toggle} ${styles['toggle--open']}`} onClick={toggleContent}>
        <div className={styles.details}>
          <p>{location}</p>
          <h2>{title}</h2>
        </div>
        <div className={styles.icon} style={{transform: `rotate(${contentOpen ? 180 : 0}deg)`}}>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.710449 0.988403L4.49992 4.77788L8.2894 0.988403" stroke="#152E4A" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className={styles.content} style={{maxHeight:scrollHeight}}>
        <div className={styles.description}>
          <PortableText
              content={blocks}
              serializers={{
                normal: renderNormalTypography,
                heading: renderHeading
              }}
          />
        </div>
        <div className={styles.actions}>
          <Button type="dark" action="link" text="Jetzt bewerben" href={`mailto:${email}?subject=Bewerbung: ${title} in ${location}`} />
        </div>
      </div>
    </section>
  )
}

export default JobPosting
