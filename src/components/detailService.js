import styles from '../styles/components/detailService.module.css'

import Image from 'next/image'
import Title from './title'


export default function DetailService({id, img, title, titleColor, order, color}) {
  return (
    <section 
        id={id} 
        style={{backgroundColor: color}} 
        className={`${styles.detail} ${order == 1 ? styles.right : styles.left }`}
    >
        <section>
            <Image src={img} quality={100} alt='Imagem de detalhes do serviço' 
                className={order == 1 ? styles.orderRight : styles.orderLeft }
            />
            <section className={order == 1 ? styles.orderLeft : styles.orderRight }>
                <Title
                title={title}
                h={2}
                border={true}
                color={titleColor}
                />
                <section>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque non elit interdum efficitur quis ac metus. Donec vel sollicitudin augue, ac venenatis tellus. Morbi cursus nunc purus, eu imperdiet arcu rutrum ut. Curabitur vitae justo facilisis, lobortis diam id, pellentesque sem.
                    </p>
                    <p>
                        Nunc et eros eget magna consectetur sagittis in quis quam. Etiam ipsum libero, aliquet et sagittis vitae, dapibus bibendum ante. Quisque cursus venenatis magna. Curabitur varius sem massa, vel varius enim scelerisque nec. Sed vitae lacus eu erat scelerisque luctus eu sit amet nulla.
                    </p>
                </section>
            </section>
        </section>
    </section>
  )
}
