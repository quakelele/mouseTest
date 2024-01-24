import React from 'react'
import s from './Layout.module.scss'
import { MouseBody } from "../MouseBody/MouseBody"
import { Left } from '../ButtonInfo/Left/Left'
import { Right } from "../ButtonInfo/Right/Right"
import { Scroll } from '../ButtonInfo/Scroll/Scroll'
import { setTheme } from '../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
const Layout = ({ t }) => {

    const { theme } = useSelector(state => state.click)
    const dispatch = useDispatch()


    const themeChangeHandler = () => {
        const changeTheme = theme === "Dark" ? "Light" : "Dark";
        dispatch(setTheme(changeTheme))

    }


    return (
        <div className={s.wrapper}>

            <h4 className={theme === "Light" ? s.fnaticW : `${s.fnaticW2}`}>{t('title')}</h4>
            <div className={s.wrapper__inner}>
                <Left t={t} />
                <Scroll t={t} />
                <Right t={t} />
            </div>
            <div className={s.mouseBody}>
                <MouseBody />
            </div>
            <h4 className={theme === "Light" ? s.fnaticW : `${s.fnaticW2}`}>Fnatic Boltz</h4>
            <div >
                <button className={theme === "Light" ? s.textBlack : `${s.textWhite}`} onClick={themeChangeHandler}><b>{theme === "Light" ? t('black') : t('white')}</b></button>
            </div>
        </div>
    )
}

export { Layout }