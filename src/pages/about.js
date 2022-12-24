import styles from '../styles/pages/about.module.css'

import Header from '../layout/header'
import CallAction from '../layout/callAction'
import Footer from '../layout/footer'
import Banner from '../components/banner'

export default function About() {
  return (
    <>
        <Header/>
        <Banner title='Serviços'/>
        <CallAction/>
        <Footer/>
    </>
  )
}
