import styles from '../styles/pages/contact.module.css'

import Header from '../layout/header'
import CallAction from '../layout/callAction'
import Footer from '../layout/footer'
import Banner from '../components/banner'
import Title from '../components/title'

import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
        <Header/>
        <Banner title='Contato'/>
        <section className={styles.contact}>
            <section>
                <section>
                    <Title 
                        title='Fale Conosco'
                        h={2}
                        border={true}
                        color='#030f27'
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <ul>
                        <li>
                            <span><BiPhone/></span>
                            <section>
                                <span>61 35555-5555</span>
                                <span>Contato Sede</span>
                            </section>
                        </li>
                        <li>
                            <span><FaWhatsapp/></span>
                            <section>
                                <span>61 35555-5555</span>
                                <span>Contato WhatsApp</span>
                            </section>
                        </li>
                        <li>
                            <span><BiEnvelope/></span>
                            <section>
                                <span>contato@dominio.com.br</span>
                                <span>Contato E-mail</span>
                            </section>
                        </li>
                        <li>
                            <span><BiMap/></span>
                            <section>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>Endereço Completo</span>
                            </section>
                        </li>
                    </ul>
                    <iframe src="https://maps.google.com/maps?q=S%C3%A3o%20Paulo,%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" marginHeight="0" marginWidth="0"/>
                </section>
                <section>
                    <Title 
                        title='Ficou com alguma dúvida?'
                        h={3}
                        border={true}
                        color='#030f27'
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <form>
                        <label>
                            Nome Completo 
                            <input type='text' placeholder='Digite o seu nome...' required></input>
                        </label>
                        <section>
                            <label>
                                E-mail
                                <input type='email' placeholder='contato@email.com' required></input>
                            </label>
                            <label>
                                Telefone
                                <input type='tel' placeholder='(99) 99999-9999'></input>
                            </label>
                        </section>
                        <label>
                            Mensagem
                            <textarea placeholder='Escreva aqui sua dúvida...' required></textarea>
                        </label>
                        <button>Enviar Mensagem</button>
                    </form>
                    <Title 
                        title='Acompanhe as nossas mídias'
                        h={3}
                        border={true}
                        color='#030f27'
                    />
                    <ul>
                        <li><FaFacebook/></li>
                        <li><FaInstagram/></li>
                        <li><FaWhatsapp/></li>
                    </ul>
                </section>
            </section>
        </section>
        <CallAction/>
        <Footer/>
    </>
  )
}