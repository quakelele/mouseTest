import React from 'react'
import style from './MidButton.module.scss'
import { useSelector } from 'react-redux'
const MidButton = () => {
    const { midle } = useSelector(state => state.click)
    const { midleDouble, timeMid } = useSelector(state => state.doubleClick)
    return (
        <div className={midleDouble > 0 ? style.middle2 : `${style.middle}`}>
            <div >
                <h3>СРЕДНЯЯ</h3>
            </div>
            <p>Все: {midle}</p>
            <p>Двойные: {midleDouble}</p>
            <p>Интервал: <span>{midleDouble > 0 ? `${timeMid} мс` : `${""}`}</span></p>
        </div>
    )
}

export default MidButton