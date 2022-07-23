import styles from './text-input.module.scss'
import {useState} from "react";
import c from 'classnames'

const TextInput = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const {
    inputType,
    id,
    name,
    placeholder
  } = props

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = (e) => {
    setIsActive(false)
    if (e.target.value.length > 0) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }
  }

  return (
    <div className={c(styles.input, {[styles['active']]: isActive || isFilled})}>
      <label className={styles.label} htmlFor={name}>{placeholder}</label>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.field}
        type={inputType}
        id={id}
        name={name}
        required
      />
    </div>
  )
}

export default TextInput
