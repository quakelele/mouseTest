import { useState } from 'react'
import { Home } from '../components/Home/Home'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import russia from '../assets/russa.png'
import usa from '../assets/usa.png'
import s from './Layout.module.scss'

export const Layout = () => {
   const { t, i18n } = useTranslation()
   const [close, setClose] = useState(false)
   const [language, setLanguage] = useState('false')
   const { theme } = useSelector(state => state.click)

   const changeLanguage = language => {
      i18n.changeLanguage(language)
   }
   const langHandler = () => {
      setLanguage(!language)
      if (language) {
         changeLanguage('ru')
         return
      }
      changeLanguage('en')
   }

   return (
      <div className={s.wrapper}>
         <div className={s.btnFlag}>
            <button
               className={theme === 'Light' ? s.readmebtn2 : s.readmebtn}
               onClick={() => setClose(!close)}>
               {t('readme')}
            </button>
            <img
               onClick={langHandler}
               className={s.russia}
               src={language ? russia : usa}
               alt="Mouse"
            />
         </div>
         <div className={close ? s.modal : s.modal2}>
            <div className={s.close}>
               <h2 onClick={() => setClose(!close)}>&#215;</h2>
               <img
                  onClick={langHandler}
                  className={s.russia2}
                  src={language ? russia : usa}
                  alt="Mouse"
               />
            </div>
            <div className={s.titles}>
               {' '}
               <h1>{t('howItWorks')}</h1>
               <p>{t('descrFaq')}</p>
            </div>
         </div>
         <Home t={t} />
      </div>
   )
}
