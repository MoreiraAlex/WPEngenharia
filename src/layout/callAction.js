import styles from '../styles/layout/callAction.module.css'

import Button from '../components/button'

export default function CallAction() {
  return (
    <section className={styles.call}>   
        <section>
            <h2>Solicite o seu Orçamento</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Button
              fontSize='18px'
              color='#ffff'
              backgroundColor='#030f27'
              padding='20px 60px'
              border={false}
              hover={true}
            >
              Peça o seu orçamento
            </Button>
        </section>
    </section>
  )
}
