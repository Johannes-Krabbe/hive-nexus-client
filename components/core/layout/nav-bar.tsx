import styles from './nav-bar.module.scss'
import { useState } from "react";

import Link from 'next/link'
import Image from 'next/image'

import Logo from '/public/assets/images/core/logo.svg'
import BurgerClosed from '/public/assets/images/core/burger-closed.svg'
import BurgerOpened from '/public/assets/images/core/burger-opened.svg'

const NavBar = () => {
  const [active, setActive] = useState(false)
  const toggle = () => setActive((active) => !active)

  const navLinks = [
    {
      name: "Team",
      path: "/team"
    },
    {
      name: "Jobs",
      path: "/jobs",
    },
    {
      name: "Blog",
      path: "/404"
    },
    {
      name: "Kontakt",
      path: "/contact",
    },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <Link href="/">
            <Image
              src={Logo}
              alt="Company Logo"
              />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.burger} onClick={toggle}>
            <Image
              src={active ? BurgerClosed : BurgerOpened}
              alt="Menu Icon"
              />
          </div>
          <ul className={`${active ? styles.navigationMobile:""} ${styles.navigationList}`}>
            {navLinks.map((link, idx) => (
              <li key={idx} className={styles.navigationItem}>
                <Link href={link.path}>
                  <a onClick={toggle}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
	);
}

export default NavBar
