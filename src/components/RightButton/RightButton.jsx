import React from 'react'
import style from './RightButton.module.scss'
import { useSelector } from 'react-redux'

const RightButton = () => {
    const { right } = useSelector(state => state.click)
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    return (
        <div className={style.right}>
            <div>

                <h3 >ПРАВАЯ</h3>
            </div>
            <p>Все: {right}</p>
            <p>Двойные: {rightDouble}</p>
            <p>Интервал: <span>{rightDouble > 0 ? `${timeRight} мс` : `${"OK"}`}</span></p>
        </div>
    )
}

export default RightButton