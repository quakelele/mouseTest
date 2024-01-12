import React from 'react'
import style from './MidButton.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setInputIntervalMidle } from '../../redux/slices/clickSlice'
const MidButton = () => {
    const { midle } = useSelector(state => state.click)
    const { midleDouble, timeMid } = useSelector(state => state.doubleClick)
    const dispatch = useDispatch()
    const [input, setInput] = React.useState('')
    const addToState = () => {
        if (input) {
            dispatch(setInputIntervalMidle(input))
        }
    }

    return (
        <div className={midleDouble > 0 ? style.middle2 : `${style.middle}`}>
            <div >
                <h3>СРЕДНЯЯ</h3>
            </div>
            <p>Все: {midle}</p>
            <p>Двойные: {midleDouble}</p>
            <p>Интервал: <span>{midleDouble > 0 ? `${timeMid} мс` : `${""}`}</span></p>
            <label className={midleDouble > 0 ? style.inputz2 : `${style.inputz}`}>
                <input
                    value={Number(input)}
                    placeholder='25-150'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className={style.addButton}
                    onClick={addToState}
                >Введите значение</button>
            </label>
        </div>
    )
}

export default MidButton