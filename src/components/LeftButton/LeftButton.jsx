import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setInputIntervalLeft } from '../../redux/slices/clickSlice'
import style from './LeftButton.module.scss'
const LeftButton = () => {
    const dispatch = useDispatch()
    const { left } = useSelector(state => state.click)
    const { leftDouble, timeLeft } = useSelector(state => state.doubleClick)

    const [input, setInput] = React.useState('')
    const addToState = () => {
        if (input) {
            dispatch(setInputIntervalLeft(input))
        }
    }

    return (

        <div className={leftDouble > 0 ? style.left2 : `${style.left}`}>
            <div className={leftDouble > 0 ? style.leftInnerFailed : `${style.leftInner}`}>
                <h3>ЛЕВАЯ</h3>
            </div>
            <p>Все: {left}</p>
            <p>Двойные: {leftDouble}</p>
            <p>Интервал: <span>{leftDouble > 0 ? `${timeLeft} мс` : `${""}`}</span></p>
            <label className={leftDouble > 0 ? style.inputz2 : `${style.inputz}`}>
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

export default LeftButton