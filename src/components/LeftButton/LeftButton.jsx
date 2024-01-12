import React from 'react'
import { useSelector } from 'react-redux'
import style from './LeftButton.module.scss'
const LeftButton = () => {
    const { left } = useSelector(state => state.click)
    const { leftDouble, timeLeft } = useSelector(state => state.doubleClick)
    return (

        <div className={leftDouble > 0 ? style.left2 : `${style.left}`}>
            <div className={leftDouble > 0 ? style.leftInnerFailed : `${style.leftInner}`}>
                <h3>ЛЕВАЯ</h3>
            </div>
            <p>Все: {left}</p>
            <p>Двойные: {leftDouble}</p>
            <p>Интервал: <span>{leftDouble > 0 ? `${timeLeft} мс` : `${""}`}</span></p>

        </div>
    )
}

export default LeftButton