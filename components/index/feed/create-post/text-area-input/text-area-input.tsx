import { FocusEvent, useState } from 'react'
import c from 'classnames'

import styles from './text-area-input.module.scss'

interface Props {
  id: string
  name: string
  placeholder: string
  formName: string
  title: string
  errorMessage: string
  onChange: any
  value: string
}

export const TextAreaInput = ({
  id,
  name,
  value,
  placeholder,
  formName,
  title,
  errorMessage,
  onChange,
}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isValid, setIsValid] = useState(true)

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

    if (value.match(pattern)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <div
      className={c(
        styles.Input,
        { [styles.active]: isActive || isFilled },
        isValid ? '' : styles.invalid
      )}
    >
      <label className={styles.Label} htmlFor={name}>
        {placeholder}
      </label>
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        form={formName}
        className={styles.Field}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        title={title}
        minLength={1}
        required
      />
      <p className={styles.ErrorField}>{errorMessage}</p>
    </div>
  )
}
