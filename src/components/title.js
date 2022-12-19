import styles from '../styles/components/title.module.css'

export default function Title({span, title, h, border, color}) {
  return (
    <section className={`${styles.title} ${border ? styles.border : null}`}>
      {span ? <span>{span}</span>: null}
      {h == 2 ? <h2 style={{color: color}}>{title}</h2> :
       h == 3 ? <h3 style={{color: color}}>{title}</h3> :
       h == 4 ? <h4 style={{color: color}}>{title}</h4> :
       null
      }      
    </section>
  )
}
