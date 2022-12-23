import styles from '../styles/pages/home.module.css'

import Image from 'next/image'

import BannerHome from '../components/bannerHome'
import CardHome from '../components/cardHome'
import Title from '../components/title'
import Button from '../components/button'
import CardService from '../components/cardService'
import Slider from '../components/slider'
import CardSlide from '../components/cardSlide'
import CallAction from '../layout/callAction'
import Header from '../layout/header'

import icone1 from '../assets/Icones/atendimentoPersonalizado.svg'
import icone2 from '../assets/Icones/profissionaisQualificados.svg'
import icone3 from '../assets/Icones/tecnologiaPonta.svg'

import about from '../assets/Páginas/HOME/ResumoSobre.jpg'

import service01 from '../assets/Páginas/HOME/Serviços/Pavimentação.png'
import service02 from '../assets/Páginas/HOME/Serviços/LaudoTécnico.png'
import service03 from '../assets/Páginas/HOME/Serviços/InfraestruturaUrbana.png'
import service04 from '../assets/Páginas/HOME/Serviços/Fundações.png'
import service05 from '../assets/Páginas/HOME/Serviços/Construção.png'

import partners01 from '../assets/Páginas/HOME/Parceiros/parceiro1.png'
import partners02 from '../assets/Páginas/HOME/Parceiros/parceiro2.png'
import partners03 from '../assets/Páginas/HOME/Parceiros/parceiro3.png'
import partners04 from '../assets/Páginas/HOME/Parceiros/parceiro4.png'
import partners05 from '../assets/Páginas/HOME/Parceiros/parceiro5.png'
import partners06 from '../assets/Páginas/HOME/Parceiros/parceiro6.png'

import dep01 from '../assets/Páginas/HOME/Depoimentos/1.jpg'
import dep02 from '../assets/Páginas/HOME/Depoimentos/2.jpg'
import dep03 from '../assets/Páginas/HOME/Depoimentos/3.jpg'

export default function Home() {
  return (
    <>
      <Header/>
      <BannerHome/>
      <section className={styles.differentials}>
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
      <section className={styles.about}>
        <section>
          <Image src={about} quality={100} alt='Imagem sobre a empresa'/>
          <section>
            <Title 
              title='Sobre a Empresa'
              span='UM POUCO'
              h={2}
              border={true}
              color='#030f27'
            />
            <section>
              <p>
                A WP Engenharia dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus. Donec vel sollicitudin augue, ac venenatis tellus. Morbi cursus nunc purus, eu imperdiet arcu rutrum ut. Curabitur vitae justo facilisis, lobortis diam id, pellentesque sem.
              </p>
              <p>
                Nunc et eros eget magna consectetur sagittis in quis quam. Etiam ipsum libero, aliquet et sagittis vitae, dapibus bibendum ante. Quisque cursus venenatis magna. Curabitur varius sem massa, vel varius enim scelerisque nec. Sed vitae lacus eu erat scelerisque luctus eu sit amet nulla.
              </p>
              <p>
                Vestibulum nec tellus vitae diam pulvinar rhoncus. Maecenas interdum arcu id felis porttitor scelerisque. Proin sed varius felis. Sed pulvinar dolor at odio mollis, et vestibulum nulla efficitur.
              </p>
            </section>
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
      </section>
      <section className={styles.services}>
        <section>
          <section>
            <Title 
              title='Nossos Serviços'
              span='Conheça os'
              h={2}
              border={true}
              color='#030f27'
            />
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
          <CardService 
            img={service01} 
            title='Pavimentação' 
            span='Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
          />
          <CardService 
            img={service02} 
            title='Laudo Técnico' 
            span='Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
          />
          <CardService 
            img={service03} 
            title='Infraestrutura Urbana' 
            span='Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
          />
          <CardService 
            img={service04} 
            title='Fundações' 
            span='Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
          />
          <CardService 
            img={service05} 
            title='Construção Civil' 
            span='Lorem ipsum dolor sit amet consectetur adipiscing elit dolor'
          />
        </section>
      </section>
      <section className={styles.depositions}>
        <section>
          <Title 
            title='Dizendo Sobre Nós'
            span='O QUE ESTÃO'
            h={2}
            border={true}
            color='#ffff'
          />
          <section>
            <Slider button={true} offset={350}>
              <CardSlide 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                img={dep01}
                name='John Doe'
                status='CEO'
              />
              <CardSlide 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                img={dep02}
                name='John Doe'
                status='CEO'
              />
              <CardSlide 
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                img={dep03}
                name='John Doe'
                status='CEO'
              />
            </Slider>
          </section>
          <section>
            <span>Empresas que já passaram por aqui:</span>
            <section>
              <Slider button={false} offset={250} gap='25px'>
                <Image src={partners01} quality={100} alt='Empresas parceiras' height={125}/>
                <Image src={partners02} quality={100} alt='Empresas parceiras' height={125}/>
                <Image src={partners03} quality={100} alt='Empresas parceiras' height={125}/>
                <Image src={partners04} quality={100} alt='Empresas parceiras' height={125}/>
                <Image src={partners05} quality={100} alt='Empresas parceiras' height={125}/>
                <Image src={partners06} quality={100} alt='Empresas parceiras' height={125}/>
              </Slider>
            </section>
          </section>
        </section>
      </section>
      <CallAction/>
    </>
  )
}
