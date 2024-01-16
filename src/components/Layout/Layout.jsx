import React from 'react'
import s from './Layout.module.scss'
import MouseBody from "../MouseBody/MouseBody"
import { Left } from '../ButtonInfo/Left/Left'
import { Right } from "../ButtonInfo/Right/Right"
import { Scroll } from '../ButtonInfo/Scroll/Scroll'
import { setOnOff } from '../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
const Layout = () => {
    const dispatch = useDispatch()
    const { onOff } = useSelector(state => state.click)
    const handler = () => {
        dispatch(setOnOff())
    }
    return (
        <div className={s.wrapper}>
            <h4 className={onOff ? s.fnaticW : `${s.fnaticW2}`}>Test the capability of your mouse to register double clicks!</h4>
            <div className={s.wrapper__inner}>
                <Left />
                <Scroll />
                <Right />

            </div>
            <div className={s.mouseBody}>
                <MouseBody />
            </div>
            <h4 className={onOff ? s.fnaticW : `${s.fnaticW2}`}>Fnatic Boltz</h4>
            <button onClick={handler}><b>B&W</b></button>
        </div>
    )
}

export default Layout