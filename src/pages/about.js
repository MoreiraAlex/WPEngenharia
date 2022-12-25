import styles from '../styles/pages/about.module.css'

import Image from 'next/image'

import Header from '../layout/header'
import CallAction from '../layout/callAction'
import Footer from '../layout/footer'
import Banner from '../components/banner'
import Title from '../components/title'
import CardHome from '../components/cardHome'

import icone1 from '../assets/Icones/missao.svg'
import icone2 from '../assets/Icones/visao.svg'
import icone3 from '../assets/Icones/valores.svg'

import about from '../assets/Páginas/SOBRE/SobreWPEngenharia.jpg'

export default function About() {
    return (
    <>
        <Header/>
        <Banner title='Serviços'/>
        <section className={styles.about}>
            <section>
                <section>
                    <section>
                        <Image src={about} quality={100} alt='Imagem sobre a empresa'/>
                        <section>
                            <span>25</span>
                            <span>Anos de Experiência <br/> no mercado</span>
                        </section>
                    </section>
                    <section>
                        <Title
                        title='Sobre a Empresa'
                        span='UM POUCO'
                        h={2}
                        border={true}
                        color='#030f27'
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus. Donec vel sollicitudin augue, ac venenatis tellus. Morbi cursus nunc purus, eu imperdiet arcu rutrum ut. Curabitur vitae justo facilisis, lobortis diam id, pellentesque sem.
                        </p>
                        <p>
                            Nunc et eros eget magna consectetur sagittis in quis quam. Etiam ipsum libero, aliquet et sagittis vitae, dapibus bibendum ante. Quisque cursus venenatis magna. Curabitur varius sem massa, vel varius enim scelerisque nec. Sed vitae lacus eu erat scelerisque luctus eu sit amet nulla. Curabitur varius sem massa, vel varius enim scelerisque nec. Sed vitae lacus eu erat scelerisque luctus eu sit amet nulla.
                        </p>
                        <p>
                            Vestibulum nec tellus vitae diam pulvinar rhoncus. Maecenas interdum arcu id felis porttitor scelerisque. Proin sed varius felis. Sed pulvinar dolor at odio mollis, et vestibulum nulla efficitur.Proin sed varius felis. Sed pulvinar dolor at odio mollis, et vestibulum nulla efficitur.
                        </p>
                    </section>
                </section>  
                <section className={styles.differentials}>
                    <CardHome 
                        icone={icone1}
                        titleLineOne='Missão'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <CardHome 
                        icone={icone2}
                        titleLineOne='Visão' 
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                    <CardHome 
                        icone={icone3}
                        titleLineOne='Valores'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
                    />
                </section>
            </section>
            
        </section>
        <CallAction/>
        <Footer/>
    </>
  )
}
