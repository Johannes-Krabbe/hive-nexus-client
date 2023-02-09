import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './footer.module.scss'

// TODO: Props
// type Props = {
// 	// children: ReactNode;
// };

const Footer = () => {
	const menuItems = [
		{
			name: "start",
			path: "/"
		},
		{
			name: "team",
			path: "/team",
		},
		{
			name: "jobs",
			path: "/jobs",
		},
		{
			name: "kontakt",
			path: "/contact",
		}
	]

	const legalItems = [
		{
			name: "Datenschutzerklärung",
			path: "/privacypolicy"
		},
		{
			name: "Impressum",
			path: "/imprint",
		}
	]

	const scrollToTop = () => {
			window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
			})
	}

	const router = useRouter()
	const currentPath = router.pathname

	const classNames = `${styles.Footer}`
	const currentYear = new Date().getFullYear()

	return (
		<footer className={classNames}>
			<div className={styles.Outer}>
				<div className={styles.MenuContainer}>

				</div>
				<div className={styles.LegalContainer}>
				</div>
				<div className={styles.CopyrightContainer}>
					<p>
						&copy;{currentYear} YOUNGCASE GmbH
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
