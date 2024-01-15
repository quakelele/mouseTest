import React from 'react'
import s from './Right.module.scss'
import { setInputIntervalRight } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
const Right = () => {

    const dispatch = useDispatch()
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')
    const { right, } = useSelector(state => state.click)
    const addToState = () => {
        if (input) {
            dispatch(setInputIntervalRight(input))
        }
    }

    return (
        <div className={s.rightClickWrapper}>
            <h4>Right: <span>{right}</span> </h4>
            <h4>Double: <span>{rightDouble}</span> </h4>
            <h4>Interval: <span>{rightDouble > 0 ? `${timeRight}` : `${""}`}</span>ms </h4>
            <label className={rightDouble > 0 ? s.inputz2 : `${s.inputz}`}>
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

export { Right }