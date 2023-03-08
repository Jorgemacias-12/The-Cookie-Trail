import React from 'react'

import styles from '@/styles/Worker.module.css'

type WorkerCardProps = {
  Name: string,
  Description: string,
  imageURL: string;
}

export const WorkerCard = ({ Name, Description, imageURL }: WorkerCardProps) => {
  return (
    <article className={styles.container}>
      <section className={styles.imageContainer}>
        <img className={styles.image} src={imageURL} alt={`Imagen del trabajador ${Name}`} />
      </section>
      <section className={styles.textContainer}>

        <h3 className={styles.title}>{Name}</h3>

        <p className={styles.description}>
          {Description}
        </p>
      </section>
    </article>
  )
}