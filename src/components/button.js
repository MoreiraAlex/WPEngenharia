import styles from '../styles/components/button.module.css'

export default function Button({children, fontSize, color, backgroundColor, padding, border, hover}) {
  return (
    <button className={`${styles.button} ${hover ? styles.hover : null} ${border ? styles.border : null}`} 
        style={{
            fontSize: fontSize, 
            color: color,
            backgroundColor: backgroundColor,
            padding: padding,
        }} 
    >
        {children}
    </button>
  )
}
