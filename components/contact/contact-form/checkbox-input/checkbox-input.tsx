import styles from './checkbox-input.module.scss'

interface Props {
	id: string
	name: string
	value: string
  label: string
};

export const CheckboxInput = ({id, name, value, label}: Props) => {
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
