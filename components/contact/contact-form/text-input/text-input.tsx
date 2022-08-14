import { ChangeEvent, ChangeEventHandler, FocusEvent, useState } from 'react';
import c from 'classnames';

import styles from './text-input.module.scss'
import { stringify } from 'querystring';

interface Props {
  inputType: string;
  id: string;
  name: string;
  placeholder: string;
  title: string;
  pattern: string;
  errorMessage: string;
}

const TextInput = ({inputType, id, name, placeholder, title, pattern, errorMessage}: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [currentValue, setCurrentValue] = useState('')

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

    if (currentValue.match(jsPattern)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  };

  const updateCurrentValue = (e: ChangeEvent<HTMLInputElement>)=> {
    setCurrentValue(e.target.value);
  }

  const jsPattern = new RegExp(pattern)

  return (
    <div className={c(styles.input, {[styles['active']]: isActive || isFilled}, isValid ? '' : styles.invalid)}>
      <label className={styles.label} htmlFor={name}>{placeholder}</label>
      <input
        className={styles.field}
        id={id}
        name={name}
        type={inputType}
        value={currentValue}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onChange={(e) => updateCurrentValue(e)}
        title={title}
        pattern={pattern}
        required
      />
      <p className={styles.errorField}>{errorMessage}</p>
    </div>
  )
}

export default TextInput;
