import styles from '../styles/components/cardHome.module.css'

import Image from 'next/image'

export default function CardHome({icone, titleLineOne,titleLineTwo, text}) {
  return (
    <section className={styles.card}>
        <Image src={icone}/>
        <h2>{titleLineOne}<br/>{titleLineTwo}</h2>
        <p>{text}</p>
    </section>
  )
}
