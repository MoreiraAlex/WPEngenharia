import styles from '../styles/components/cardSlide.module.css'  

import Image from 'next/image'

export default function CardSlide({img, text, name, status}) {
  return (
    <section className={styles.card}>
      <p>{text}</p>
      <section>
        <Image src={img} quality={80} alt='Imagem dos socios'/>
        <section>
          <span>{name}</span>
          <span>{status}</span>
        </section>
      </section>

    </section>
  )
}
