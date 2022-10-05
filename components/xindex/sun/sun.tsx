import styles from './sun.module.scss'

interface Props {
  color: 'peach' | 'angluar-pp' | 'angular-purplepeach'
}

export const Sun = ({color}: Props) => {
	const classNames = `${styles.container} ${styles[color]}`
	
	return (
		<div className={classNames}>
		</div>
	)
}
