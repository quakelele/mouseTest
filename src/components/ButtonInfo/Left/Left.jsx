import React from 'react'
import { setInputIntervalLeft, } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import s from './Left.module.scss'
const Left = () => {
    const dispatch = useDispatch()
    const { leftDouble, timeLeft } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')
    const { left } = useSelector(state => state.click)
    const addToState = () => {
        dispatch(setInputIntervalLeft(input))

    }
    return (
        <div className={s.leftClickWrapper}>
            <h4>Left: <span>{left}</span>  </h4>
            <h4>Double: <span>{leftDouble}</span> </h4>
            <h4>Interval: <span>{leftDouble > 0 ? `${timeLeft}` : `${""}`}</span>ms </h4>
            <label className={leftDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <input
                    value={input}
                    placeholder='25-150'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className={s.addButton}
                    onClick={addToState}
                >set interval</button>
                <div className={s.ebal}>  </div>
            </label>
        </div>
    )
}

export { Left }