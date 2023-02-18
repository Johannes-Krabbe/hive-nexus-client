import styles from './footer.module.scss'

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.Footer}>
			<div className={styles.Wrapper}>
				<div className={styles.Menu}>
					Footer
				</div>
				<p>
					&copy;{currentYear} hivenexus
				</p>
				<div className={styles.CopyRight}>

				</div>
			</div>
		</footer>
	);
}
