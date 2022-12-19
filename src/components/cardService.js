import styles from '../styles/components/cardService.module.css'

import Button from './button'

export default function CardService({img, title, span}) {
  return (
    <section className={styles.card}>
        <section style={{backgroundImage: `url(${img.src})`}}>
            <h3>{title}</h3>
            <span>{span}</span>
            <Button
                fontSize='16px'
                color='#ffff'
                backgroundColor='#fd5d14'
                padding='15px 40px'
                border={false}
                hover={false}
            >
                Saiba mais
            </Button>
        </section>

    </section>
  )
}
