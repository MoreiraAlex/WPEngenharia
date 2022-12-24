import styles from '../styles/components/banner.module.css'

export default function Banner({title}) {
  return (
    <section className={styles.banner}>
        <section>
            <h1>{title}</h1>
        </section>
    </section>
  )
}
