import React from 'react'
import s from './Layout.module.scss'
import { MouseBody } from "../MouseBody/MouseBody"
import { Left } from '../ButtonInfo/Left/Left'
import { Right } from "../ButtonInfo/Right/Right"
import { Scroll } from '../ButtonInfo/Scroll/Scroll'
import { setOnOff } from '../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next";
const Layout = () => {

    const { t, i18n } = useTranslation();
    const { onOff } = useSelector(state => state.click)
    const dispatch = useDispatch()
 
    const handler = () => {
        dispatch(setOnOff())
    }


    return (
        <div className={s.wrapper}>
            
            <h4 className={onOff ? s.fnaticW : `${s.fnaticW2}`}>{t('title')}</h4>
            <div className={s.wrapper__inner}>
                <Left t={t} />
                <Scroll t={t} />
                <Right t={t} />
            </div>
            <div className={s.mouseBody}>
                <MouseBody />
            </div>
            <h4 className={onOff ? s.fnaticW : `${s.fnaticW2}`}>Fnatic Boltz</h4>
            <div >
                <button className={onOff ? s.textBlack : `${s.textWhite}`} onClick={handler}><b>{onOff ? t('black') : t('white')}</b></button>
            </div>
        </div>
    )
}

export { Layout }