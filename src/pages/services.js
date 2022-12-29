import styles from '../styles/pages/services.module.css'

import Image from 'next/image'

import { Link } from 'react-scroll'

import Header from '../layout/header'
import CallAction from '../layout/callAction'
import Footer from '../layout/footer'
import Banner from '../components/banner'
import Title from '../components/title'
import DetailService from '../components/detailService'
import Accordion from '../components/accordion'

import resume from '../assets/Páginas/SERVIÇOS/SobreWPEngenharia.jpg'

import detail01 from '../assets/Páginas/SERVIÇOS/Construção.jpg'
import detail02 from '../assets/Páginas/SERVIÇOS/Pavimentação.jpg'
import detail03 from '../assets/Páginas/SERVIÇOS/InsfraestruturaUrbana.jpg'
import detail04 from '../assets/Páginas/SERVIÇOS/LaudoTecnico.jpg'
import detail05 from '../assets/Páginas/SERVIÇOS/Fundações.jpg'


export default function Services() {
  return (
    <>
      <Header/>
      <Banner title='Serviços'/>
      <section className={styles.about}>
        <section>
          <Image src={resume} quality={100} alt='Imagem de resumo dos serviços'/>
          <section>
            <Title
              title='Nossos Serviços'
              span='CONHEÇA OS'
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
            <section>
              <h3>Clique na opção de serviço que deseja saber mais:</h3>
              <ul>
                <li>
                  <Link to='construction' spy={true} smooth={true} offset={-100} duration={400}>Construção Civil</Link>
                </li>
                <li>
                  <Link to='paving' spy={true} smooth={true} offset={-100} duration={600}>Pavimentação</Link>
                </li>
                <li>
                  <Link to='infrastructure' spy={true} smooth={true} offset={-100} duration={800}>Infraestrutura Urbana</Link>
                </li>
                <li>
                  <Link to='report' spy={true} smooth={true} offset={-100} duration={1000}>Laudo Técnico</Link>
                </li>
                <li>
                  <Link to='foundations' spy={true} smooth={true} offset={-100} duration={1200}>Fundações</Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <DetailService id='construction' img={detail01} title='Construção Civil' titleColor='#030f27' color='#ffff'/>
      <DetailService id='paving' img={detail02} title='Pavimentação' titleColor='#ffff' order={1} color='#030f27'/>
      <DetailService id='infrastructure' img={detail03} title='Infraestrutura Urbana' titleColor='#030f27' color='#ffff'/>
      <DetailService id='report' img={detail04} title='Laudo Técnico' titleColor='#ffff' order={1} color='#030f27'/>
      <DetailService id='foundations' img={detail05} title='Fundações' titleColor='#030f27' color='#ffff'/>
      <section className={styles.questions}>
        <section>
          <Title
            title='Perguntas Frequentes'
            span='FAQ'
            h={2}
            border={true}
            color='#ffff'
          />          
          <section>
            <Accordion
              title='Pergunta 1'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus.'
            />
            <Accordion
              title='Pergunta 2'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus.'
            />
            <Accordion
              title='Pergunta 3'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus.'
            />
            <Accordion
              title='Pergunta 4'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus.'
            />
            <Accordion
              title='Pergunta 5'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus.'
            />
          </section> 
        </section>
      </section>
      <CallAction/>
      <Footer/>
    </>
  )
}
