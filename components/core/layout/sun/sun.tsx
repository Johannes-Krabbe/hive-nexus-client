import styles from './sun.module.scss'

interface SunProps {
  color: 'sun-blue' | 'sun-peach' | 'sun-purplepeach'
}

export const Sun = ({color}: SunProps) => {
	const classNames = `${styles.Wrapper} ${styles[color]}`

	return (
		<div className={classNames} />
	)
}
