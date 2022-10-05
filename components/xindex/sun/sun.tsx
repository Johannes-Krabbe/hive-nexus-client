import styles from './sun.module.scss'

interface Props {
  color: 'sun-blue' | 'sun-peach' | 'sun-purplepeach'
}

export const Sun = ({color}: Props) => {
	const classNames = `${styles.container} ${styles[color]}`
	
	return (
		<div className={classNames}>
		</div>
	)
}
