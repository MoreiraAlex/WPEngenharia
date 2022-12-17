import styles from '../styles/pages/home.module.css'

import BannerHome from '../components/bannerHome'
import CardHome from '../components/cardHome'

import icone1 from '../assets/Icones/atendimentoPersonalizado.svg'
import icone2 from '../assets/Icones/profissionaisQualificados.svg'
import icone3 from '../assets/Icones/tecnologiaPonta.svg'

export default function Home() {
  return (
    <section className={styles.home}>
      <BannerHome/>
      <section>
        <section>
          <CardHome 
            icone={icone1}
            titleLineOne='Atendimento'
            titleLineTwo='Personalizado'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
          />
          <CardHome 
            icone={icone2}
            titleLineOne='Profissionais'
            titleLineTwo='Qualificados'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
          />
          <CardHome 
            icone={icone3}
            titleLineOne='Tecnologia'
            titleLineTwo='de Ponta'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
          />
        </section>
      </section>
    </section>
  )
}
