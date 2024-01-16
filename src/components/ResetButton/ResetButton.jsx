import React from 'react'
import s from './ResetButton.module.scss'
import Reset from "../../img/Reset.png"
import ResetB from "../../img/ResetB.png"
import { useDispatch, useSelector } from 'react-redux'
import { resetAll } from '../../redux/slices/clickSlice'
import { setReset, setTimeDoubleClickLeft } from '../../redux/slices/doubleClickSlice'
const ResetButton = () => {
    const { onOff } = useSelector(state => state.click)
    const dispatch = useDispatch()
    const setResetAll = () => {
        dispatch(setReset())
        dispatch(resetAll())
        dispatch(setTimeDoubleClickLeft())
    }
    return (
        <div onClick={setResetAll}>
            <img className={onOff ? s.resetButton2 : `${s.resetButton}`} src={onOff ? ResetB : `${Reset}`} alt="Reset Button" />
        </div>
    )
}

export { ResetButton }