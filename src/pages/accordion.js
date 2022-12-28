import styles from '../styles/components/accordion.module.css'

import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'

export default function Accordion({ title, text }) {

  const [accordion, setAccordion] = useState(false)

  function openAccordion() {
    if (accordion)
      setAccordion(false)
    else
      setAccordion(true)
  }

  return (
    <section className={`${styles.accordion} ${accordion ? styles.accordionOpen : null}`}>
        <header onClick={openAccordion}>
          <h3>{title}</h3>
          <span>
            <BiChevronDown className={`${styles.icon} ${accordion ? styles.iconOpen : null}`}/>
          </span>
        </header>
        <main>
          <p>{text}</p>   
        </main>
    </section>
  )
}