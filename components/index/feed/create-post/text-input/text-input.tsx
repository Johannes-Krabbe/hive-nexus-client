import { FocusEvent, useState } from 'react'
import c from 'classnames'
import styles from './text-input.module.scss'

interface Props {
  inputType: string
  id: string
  name: string
  placeholder: string
  title: string
  pattern: string
  onChange: any
  value: string
  errorMessage: string
}

export const TextInput = ({
  inputType,
  id,
  name,
  placeholder,
  title,
  pattern,
  onChange,
  value,
  errorMessage,
}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const focusHandler = () => {
    setIsActive(true)
  }

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsActive(false)
    if (e.target.value.length > 0) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }

    if (value.match(jsPattern)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const jsPattern = new RegExp(pattern)

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
      <input
        className={styles.Field}
        id={id}
        name={name}
        type={inputType}
        value={value}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={onChange}
        title={title}
        pattern={pattern}
        required
      />
      <p className={styles.ErrorField}>{errorMessage}</p>
    </div>
  )
}
