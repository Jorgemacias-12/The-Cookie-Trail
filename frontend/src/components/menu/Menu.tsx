import { menuItems } from '@/constants/Menu'
import Link from 'next/link'
import React from 'react'

import styles from '@/styles/Menu.module.css'

export const Menu = () => {
  return (
    <ul className={styles.container}>
      {
        menuItems.map(({ name, link }, index) => {
          return <li className={styles.item} key={index}>
            <Link className={styles.link} href={link}>{name}</Link>
          </li>
        })
      }
    </ul>
  )
}
