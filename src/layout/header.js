import styles from '../styles/layout/header.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

import logo from '../assets/Logo/LogoBranca.png'

import CardHeader from '../components/cardHeader'

import { BiPhone, BiEnvelope, BiMenu, BiX } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Header() {

  const [button, setButton] = useState(false);
  const [fixed, setFixed] = useState(false);
  
  useEffect(() => {
    const navFixed = () => {
      if(window.innerWidth > 600 && window.innerWidth < 850){

        if(window.scrollY >= 180){
          setFixed(true)
        } else {
          setFixed(false)
        }

      } else {

        if(window.scrollY >= 100){
          setFixed(true)
        } else {
          setFixed(false)
        }

      }
    }
    window.addEventListener('scroll', navFixed)
  }, []);

  return (
    <header className={styles.header}>
      <section>
        <section>
          <Image src={logo} quality={100} alt='Logo da pagina'/> 
          <section>
            <CardHeader title='99 99999-9999' sub='Fale Conosco'>
              <BiPhone/>
            </CardHeader>
            <CardHeader title='contato@dominio.com.br' sub='Mande sua mensagem'>
              <BiEnvelope/>
            </CardHeader>
          </section>         
        </section>
      </section>
      <nav className={`${fixed ? styles.navFixed : null}`}>
        <section>
          <ul className={`${button ? styles.mobile_active : null}`}>
            <li>
              <Link href=''>Início</Link>
            </li>
            <li>
              <Link href=''>Sobre</Link>
            </li>
            <li>
              <Link href=''>Serviços</Link>
            </li>
            <li>
              <Link href=''>Contato</Link>
            </li>
          </ul>
          <button onClick={() => {button ? setButton(false) : setButton(true)}}>
            {button ? 
              <BiX/>
              :
              <BiMenu/>
            }
          </button>
          <ul>
            <li>
              <FaFacebook/>
            </li>
            <li>
              <FaInstagram/>
            </li>
            <li>
              <FaWhatsapp/>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
