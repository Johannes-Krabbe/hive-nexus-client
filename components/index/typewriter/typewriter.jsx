import styles from './typewriter.module.scss'
import React from "react";
import Typewriter from 'typewriter-effect';

const TypeWriter = (props) => {
  const {
    strings
  } = props

  return (
    <section className={styles.Container}>
      <div className={styles.Display}>
        <Typewriter
          options={{
            strings: strings,
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 40,
            pauseFor: 1500,
            cursorClassName: `${styles.Typewriter__cursor} Typewriter__cursor`
          }}
        />
      </div>
    </section>
  )
}

export default TypeWriter
