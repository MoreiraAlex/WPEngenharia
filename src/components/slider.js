import styles from '../styles/components/slider.module.css'

import { useRef } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function Slider({children, button, offset, gap }) {

    const slider = useRef(null);

    function MoveSlider(side) {
        if (side > 0) {
            slider.current.scrollLeft -= offset
        } else {
            slider.current.scrollLeft += offset;
        }
    }

  return (
    <section className={`${styles.slider} ${button ? null : styles.notIcon}`}>
        <span onClick={() => MoveSlider(1)}>
            <IoIosArrowBack/>
        </span>
        <section ref={slider} style={{gap: gap}}>
            {children}
        </section>
        <span onClick={() => MoveSlider(0)}>
            <IoIosArrowForward/>
        </span>
    </section>
  )
}
