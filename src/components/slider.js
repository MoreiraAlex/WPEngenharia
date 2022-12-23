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

    
    // const drag = (event) => {
    // }
    
    // const mouseDown = (event) => {
        
    //     // console.log(event)
        
    //     window.addEventListener('mousemove', (e) => {
    //         console.log(e.movementX)

    //         // document.documentElement.style.cursor = 'grabbing'
    //         // e.target.setAttribute('draggable', false)


    //         // if (event.movementX >= 0) {
    //         //     slider.current.scrollLeft -= offset
    //         // } else {
    //         //     slider.current.scrollLeft += offset;
    //         // }
    //     })
    //     // console.log(event.movementX)

    // }
    
    // const mouseUp = (event) => {
    //     // console.log(event)
    //     document.documentElement.style.cursor = 'grab'
    //     event.target.setAttribute('draggable', false)

    //     window.removeEventListener('mousemove', event, false)
    // }

  return (
    <section className={`${styles.slider} ${button ? null : styles.notIcon}`}  
        // onMouseDown={(event) => mouseDown(event)} 
        // onMouseUpCapture={(event) => mouseUp(event)} 
        // onMouseLeave={() => {document.documentElement.style.cursor = 'default'}}
        // onMouseEnter={() => {document.documentElement.style.cursor = 'grab'}}
        // onMouseDown={(event) => {mouseDown(event)}}
        // onmou={(event) => {mouseUp(event)}}
    >
        {/* {button ?
            <div>
                <span></span>
                <span></span>
            </div>
        :
            null
        } */}
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
