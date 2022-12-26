import styles from '../styles/components/cardTeam.module.css'

import Button from './button'
import Title from './title'

export default function CardTeam({img, title, span}) {
  return (
    <section className={styles.card}>
        <section>
          <section style={{backgroundImage: `url(${img.src})`}}/>
        </section>
        <section>
          <Title
            title={title}
            span={span}
            h={3}
            border={false}
            color='#030f27'
          />
          <Button
            fontSize='14px'
            color='#fd5d14'
            padding='15px'
            border={false}
            hover={false}
          >
            Entrar em contato
          </Button>
        </section>
    </section>
  )
}
