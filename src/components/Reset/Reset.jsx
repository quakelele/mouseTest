import React from 'react'
import style from './Reset.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { resetAll } from '../../redux/slices/clickSlice'
import { setReset } from '../../redux/slices/doubleClickSlice'
const Reset = () => {
    const dispatch = useDispatch()
    const setResetAll = () => {
        dispatch(setReset())
        dispatch(resetAll())
    }
    return (
        <button
            onClick={setResetAll}
            className={style.resetBtn} > Сброс</button >
    )
}

export default Reset