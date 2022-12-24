import styles from '../styles/layout/footer.module.css'

import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/Logo/LogoBranca.png'

import Title from '../components/title'

import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section>
            <section>
                <section>
                    <Link href=''>
                        <Image src={logo} quality={100} alt='Logo do site'/>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <ul>
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaWhatsapp/></li>
                    </ul>
                </section>
                <section>
                    <Title
                        title='Contato'
                        h={2}
                        border={true}
                        color='#ffff'
                    />
                    <ul>
                        <li>
                            <BiPhone/>
                            <span>99 99999-9999</span>
                        </li>
                        <li>
                            <FaWhatsapp/>
                            <span>99 99999-9999</span>
                        </li>
                        <li>
                            <BiEnvelope/>
                            <span>contato@dominio.com.br</span>
                        </li>
                        <li>
                            <BiMap/>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </li>
                    </ul>
                </section>
                <section>
                    <Title
                        title='Link Úteis'
                        h={2}
                        border={true}
                        color='#ffff'
                    />
                    <ul>
                        <li>
                            <Link href=''>
                                <IoIosArrowForward/>
                                <span>Início</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='about'>
                                <IoIosArrowForward/>
                                <span>Sobre</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='services'>
                                <IoIosArrowForward/>
                                <span>Serviços</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='contact'>
                                <IoIosArrowForward/>
                                <span>Contato</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='policy'>
                                <IoIosArrowForward/>
                                <span>Política de Privacidade</span>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <Title
                        title='Localização'
                        h={2}
                        border={true}
                        color='#ffff'
                    />
                    <iframe src="https://maps.google.com/maps?q=S%C3%A3o%20Paulo,%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
                </section>
            </section>
            <section>
                <span>WP Engenharia &copy; 2022 Todos os direitos reservados.</span>
                <span>
                    Desenvolvido por <a href="https://github.com/MoreiraAlex" target="_blank">Alex Moreira</a>
                </span>
            </section>
        </section>
    </footer>
  )
}
