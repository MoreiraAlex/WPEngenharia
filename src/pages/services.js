import styles from '../styles/pages/services.module.css'

import Image from 'next/image'

import { Link } from 'react-scroll'

import Header from '../layout/header'
import CallAction from '../layout/callAction'
import Footer from '../layout/footer'
import Banner from '../components/banner'
import Title from '../components/title'

import resume from '../assets/Páginas/SERVIÇOS/SobreWPEngenharia.jpg'


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
                  <Link to='' spy={true} smooth={true} offset={0} duration={800}>Construção Civil</Link>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true} offset={0} duration={800}>Pavimentação</Link>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true} offset={0} duration={800}>Infraestrutura Urbana</Link>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true} offset={0} duration={800}>Laudo Técnico</Link>
                </li>
                <li>
                  <Link to='' spy={true} smooth={true} offset={0} duration={800}>Fundações</Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <CallAction/>
      <Footer/>
    </>
  )
}