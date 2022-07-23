import styles from './hero.module.scss'
import React from "react";

const Hero = (props) => {
  const {
    headline,
    headlinebold,
    headlinepart,
    description
  } = props

  let partOne
  let partTwo
  try {
    const array = headline.split(' ')
    let splittedHeadline = array.splice(0, 1)
    splittedHeadline.push(array.join(' '))
    partOne = splittedHeadline[0]
    partTwo = splittedHeadline[1]
  } catch (e) {}

  return (
    <section className={styles.Container}>
      <h1 className={styles.Headline}>
        {partOne}<br/>
        {partTwo} <span>{headlinebold}</span><br/>
        <span className={styles.HeadlinePart}>
          {headlinepart}
        </span>
      </h1>
      <p className={styles.Description}>{description}</p>
    </section>
  )
}

export default Hero
