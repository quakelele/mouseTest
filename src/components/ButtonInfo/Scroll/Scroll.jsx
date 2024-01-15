import React from 'react'
import s from './Scroll.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setInputIntervalMidle } from '../../../redux/slices/clickSlice'
const Scroll = () => {
    const dispatch = useDispatch()
    const { midle } = useSelector(state => state.click)
    const { midleDouble, timeMid } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')

    const addToState = () => {
        if (input) {
            dispatch(setInputIntervalMidle(input))
        }
    }
    return (
        <div className={s.midClickWrapper}>
            <h4>Scroll: <span> {midle} </span></h4>
            <h4>Double: <span> {midleDouble} </span></h4>
            <h4>Interval: <span>{midleDouble > 0 ? `${timeMid}` : `${""}`}</span>ms </h4>
            <label className={midleDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <input
                    value={Number(input)}
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

export { Scroll }