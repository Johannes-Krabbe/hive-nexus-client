import styles from './checkbox-input.module.scss'
import {useState} from "react";

const CheckboxInput = (props) => {
  const {
    id,
    name,
    value,
    label
  } = props

  return (
    <label className={styles.container} htmlFor={name}>
      {label}
      <input
        className={styles.input}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        required
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default CheckboxInput
