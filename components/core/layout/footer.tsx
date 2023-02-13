import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './footer.module.scss'

// TODO: Props
// type Props = {
// 	// children: ReactNode;
// };

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.Footer}>
			<div className={styles.Outer}>
				<div className={styles.MenuContainer}>
					Footer
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
