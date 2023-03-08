import React from 'react'

import styles from '@/styles/Conocenos.module.css'
import { workers } from '@/constants/Conocenos';
import { WorkerCard } from '@/components/workerCard/WorkerCard';

const index = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>¡Conocenos!</h3>

      <section className={styles.wrapper}>
        {
          workers.map(({ Name, Descripcion, ImageURL }, index) => {
            return <WorkerCard key={index} Name={Name} Description={Descripcion} imageURL={ImageURL} />
          })
        }
      </section>

    </div>
  )
}

// #58b4d1

export default index;
