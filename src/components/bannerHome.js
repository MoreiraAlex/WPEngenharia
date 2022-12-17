import { useEffect, useState } from 'react'
import styles from '../styles/components/bannerHome.module.css'

export default function BannerHome() {

  const[banner, setBanner] = useState(0)
  const[refresh, setRefresh] = useState(false)

  

  useEffect(() => {

    setTimeout(() => {
      banner < 3 ? setBanner(banner + 1) : setBanner(0)
      refresh ? setRefresh(false) : setRefresh(true)
    }, 8000)

  }, [refresh])


  return (
    <section className={styles.container}>
        <div
          className={`
            ${styles.banner}
            ${
              banner == 0 ? styles.bannerA :
              banner == 1 ? styles.bannerB :
              banner == 2 ? styles.bannerC :
              banner == 3 ? styles.bannerD :
              null
            }
          `}
        >
        </div>
        <h1>Tiramos o seu projeto dos sonhos do papel</h1>
        <p>
          WP Engenharia dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button>Peça o seu orçamento</button>
    </section>
  )
}
