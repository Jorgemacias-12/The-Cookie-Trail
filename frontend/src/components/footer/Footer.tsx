import React from 'react'

import styles from '@/styles/Footer.module.css'
import { aboutUs, aboutUsSection, notice, noticeSection } from '@/constants/Footer'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.brandContainer}>

        <h3>
          The Cookie Trail
        </h3>

        <img src="/brand-logo-footer.jpg" alt="" className={styles.brandLogo} />
      </section>

      <section className={styles.aboutUs}>

        <h3>{aboutUs}</h3>

        {
          aboutUsSection.map((text, index) => {
            return <p className={styles.text} key={index}>
              {
                text
              }
            </p>
          })
        }

      </section>

      <section className={styles.notice}>
        <h3>
          {notice}
        </h3>

        {
          noticeSection.map((text, index) => {
            return <p className={styles.text} key={index}>{text}</p>
          })
        }

      </section>

    </footer>
  )
}