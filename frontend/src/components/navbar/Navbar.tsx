import React, { useState } from 'react'

import styles from '@/styles/Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Menu } from '@/components/menu/Menu';
import { CheckIsDesktop } from '@/hooks/useMedia';

export const Navbar = () => {

  const isDesktop = CheckIsDesktop();

  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    setVisible(!visible);
  }

  return (
    <nav className={styles.container}>
      <section className={styles.logoContainer}>
        <img src="/brand-logo.png" alt="The Cookie Trail Logo" className={styles.brandLogo} />

        <h1 className={styles.title}>
          The Cookie Trail
        </h1>

      </section>

      <section className="menuContainer">

        {
          visible && !isDesktop && < Menu />
        }

        {
          isDesktop && < Menu />
        }

      </section>

      <GiHamburgerMenu className={styles.icon} onClick={showMenu} />
    </nav>
  )
}
