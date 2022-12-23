import styles from '../styles/components/cardHeader.module.css'

export default function CardHeader({children, title, sub}) {
  return (
    <section className={styles.card}>
        <span>
          {children}
        </span>
        <section>
            <span>{title}</span>
            <span>{sub}</span>
        </section>
    </section>
  )
}
