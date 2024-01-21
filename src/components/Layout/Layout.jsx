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
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const dispatch = useDispatch()
    const { onOff } = useSelector(state => state.click)
    const handler = () => {
        dispatch(setOnOff())
    }
    const [lang, setLang] = React.useState(false);
    const langHandler = () => {
        setLang(!lang)
        if (lang) {
            changeLanguage("ru")
        } else {
            changeLanguage("en")
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={onOff ? s.btnOfLang2 : `${s.btnOfLang}`} onClick={langHandler}>{lang ? t('langs') : t('to English')}</div>
            {/* <button onClick={() => changeLanguage("ru")}>ru</button>
            <button onClick={() => changeLanguage("en")}>en</button> */}
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