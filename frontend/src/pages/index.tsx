import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <article className={styles.wrapper}>
        <section className={styles.container}>

          <h2 className={styles.title}>
            The Cookie Trail
          </h2>

          <p className={styles.description}>
            Plataforma de micro inversiones, que permita recaudar e invertir fondos para proyectos.
          </p>

        </section>

        <section className={styles.callToAction}>
          <button type="button" className={styles.button}>Invertir</button>
          <button type="button" className={styles.button}>Crear</button>
        </section>
      </article>
    </>
  )
}
