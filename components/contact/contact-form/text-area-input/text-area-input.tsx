import {ChangeEvent, FocusEvent, useState} from "react";
import c from 'classnames'

import styles from './text-area-input.module.scss'

interface Props {
  id: string;
  name: string;
  placeholder: string;
  formName: string;
  title: string;
  errorMessage: string;
}

const TextAreaInput = ({id, name, placeholder, formName, title, errorMessage}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [currentValue, setCurrentValue] = useState('')

  const pattern = /\w+/g

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setIsActive(false)
    if (e.target.value.length > 0) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }

    if (currentValue.match(pattern)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div className={c(styles.input, {[styles['active']]: isActive || isFilled}, isValid ? '' : styles.invalid)}>
      <label className={styles.label} htmlFor={name}>
        {placeholder}
      </label>
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        form={formName}
        className={styles.field}
        id={id}
        name={name}
        value={currentValue}
        title={title}
        minLength={1}
        required
      />
      <p className={styles.errorField}>
        {errorMessage}
      </p>
    </div>
  )
}

export default TextAreaInput;
