import styles from '../styles/pages/noFound.module.css'

import Link from 'next/link'

import Title from '../components/title'
import Button from '../components/button'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Head from '../layout/head'

export default function NoFound(){
    return(
        <>
            <Head title='Página não encontrada'/>
            <Header/>
            <section className={styles.noFound}>
                <section>
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_AQcLsD.json" speed="1" loop autoplay/>
                    <section>
                        <Title 
                            title='Página não encontrada'
                            span='ERRO 404'
                            h={2}
                            border={true}
                            color='#030f27'
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <Link href='/'>
                            <Button
                                fontSize='16px'
                                color='#ffff'
                                backgroundColor='#fd5d14'
                                padding='15px 50px'
                                border={false}
                                hover={true}
                            >
                                Voltar à página inicial
                            </Button>
                        </Link>
                    </section>
                </section>
            </section>
            <Footer/>
        </>
    )
}