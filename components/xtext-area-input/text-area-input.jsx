import styles from './text-area-input.module.scss'
import {useState} from "react";
import c from 'classnames'

const TextAreaInput = (props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const {
    id,
    name,
    placeholder,
    form
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

  const handleChange = (e) => {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div className={c(styles.input, {[styles['active']]: isActive || isFilled})}>
      <label className={styles.label} htmlFor={name}>{placeholder}</label>
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        form={form}
        className={styles.field}
        id={id}
        name={name}
        required
      />
    </div>
  )
}

export default TextAreaInput
