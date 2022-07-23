import React, {useRef, useEffect} from "react";
import styles from './cursor.module.scss';

const Cursor = props => {
    const {
    } = props

    const cursorRef = useRef(null)
    useEffect(() => {
        if (cursorRef.current == null)
            return;
        document.addEventListener('mousemove', e => {
            if (cursorRef.current == null)
                return;
            cursorRef.current.setAttribute('style', `transform: translateX(${e.pageX - 90}px) translateY(${e.pageY - 200}px)`)
        })
        document.addEventListener('click', () => {
            if (cursorRef.current == null)
                return;
            cursorRef.current.classList.add(styles.expand);
            setTimeout(() => {
                if (cursorRef.current == null)
                    return;
                cursorRef.current.classList.remove(styles.expand);
            }, 500)
        })
    }, [])
    return (
        <div className={styles.cursor} ref={cursorRef}>
        </div>
    )
}
export default Cursor