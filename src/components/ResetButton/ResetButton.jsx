import React from 'react'
import s from './ResetButton.module.scss'
import Reset from "../../img/Reset.png"
import { useDispatch, useSelector } from 'react-redux'
import { resetAll, setInputIntervalLeft, resetInput } from '../../redux/slices/clickSlice'
import { setReset, setTimeDoubleClickLeft } from '../../redux/slices/doubleClickSlice'
const ResetButton = () => {
    const dispatch = useDispatch()
    const setResetAll = () => {
        dispatch(setReset())
        dispatch(resetAll())
        dispatch(setTimeDoubleClickLeft())
    }
    return (
        <div onClick={setResetAll}>
            <img className={s.resetButton} src={Reset} alt="Reset Button" />
        </div>
    )
}

export { ResetButton }