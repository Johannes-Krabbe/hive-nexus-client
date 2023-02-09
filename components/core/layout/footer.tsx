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

	const scrollToTop = () => {
			window.scroll({
					top: 0,
					left: 0,
					behavior: 'smooth'
			})
	}

	const router = useRouter()

	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.Footer}>
			<div className={styles.Outer}>
				<div className={styles.MenuContainer}>

				</div>
				<div className={styles.LegalContainer}>
				</div>
				<div className={styles.CopyrightContainer}>
					<p>
						&copy;{currentYear} hivenexus
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
