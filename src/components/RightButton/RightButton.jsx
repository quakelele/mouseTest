import React from 'react'
import style from './RightButton.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setInputIntervalRight } from '../../redux/slices/clickSlice'
const RightButton = () => {
    const { right } = useSelector(state => state.click)
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    const dispatch = useDispatch()
    const [input, setInput] = React.useState('')
    const addToState = () => {
        if (input) {
            dispatch(setInputIntervalRight(input))
        }
    }


    return (
        <div className={rightDouble > 0 ? style.right2 : `${style.right}`}>
            <div>
                <h3 >ПРАВАЯ</h3>
            </div>
            <p>Все: {right}</p>
            <p>Двойные: {rightDouble}</p>
            <p>Интервал: <span>{rightDouble > 0 ? `${timeRight} мс` : `${""}`}</span></p>
            <label className={rightDouble > 0 ? style.inputz2 : `${style.inputz}`}>
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

export default RightButton