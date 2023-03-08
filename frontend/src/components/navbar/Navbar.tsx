import React, { useState } from 'react'

import styles from '@/styles/Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Menu } from '@/components/menu/Menu';

export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const showMenu = () => {

  }

  return (
    <nav className={styles.container}>
      <section className={styles.logoContainer}>
        <img src="/brand-logo.png" alt="The Cookie Trail Logo" className={styles.brandLogo} />

        <h1 className={styles.title}>
          The Cookie Trail
        </h1>

      </section>
      
      <Menu />

      <Avatar />

      <GiHamburgerMenu className={styles.icon} onClick={showMenu} />

      {/* <Menu /> */}

      {/* {
        visible && <Menu />
      } */}

    </nav>
  )
}
