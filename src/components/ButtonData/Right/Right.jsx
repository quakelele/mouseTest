import { setInputIntervalRight } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosClose } from 'react-icons/io'
import { useState, useEffect } from 'react'
import s from './Right.module.scss'

const Right = ({ t }) => {
   const [showModal, setShowModal] = useState(false)
   const [input, setInput] = useState('')
   const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
   const { right, theme } = useSelector(state => state.click)
   const dispatch = useDispatch()

   const handleClick = () => {
      setShowModal(true)
      // Спрятать модальное окно через 3 секунды
      setTimeout(() => {
         setShowModal(false)
      }, 8000)
      if (input <= 25) {
         setInput(25)
      }
      dispatch(setInputIntervalRight(input))
   }

   const resetInput = () => {
      dispatch(setInputIntervalRight(25))
      setInput('')
   }

   useEffect(() => {
      return () => clearTimeout()
   }, [])

   return (
      <div className={s.wrapper}>
         <div
            className={
               rightDouble > 0
                  ? s.rightWRed
                  : s.rightWDef && theme === 'Light'
                    ? s.rightWWhite2
                    : s.rightWWhite
            }>
            <h4>
               {t('Right')}: <span>{right > 0 && right}</span>{' '}
            </h4>
            <h4>
               {t('Double')}: <span>{rightDouble > 0 && rightDouble}</span>{' '}
            </h4>
            <h4>
               {t('Interval')}:{' '}
               <span>{rightDouble > 0 && `${timeRight} ms`}</span>{' '}
            </h4>
            <label className={rightDouble > 0 ? s.inputz2 : s.inputz}>
               <IoIosClose onClick={resetInput} className={s.closeTag} />
               <input
                  value={input}
                  placeholder={t('def 25')}
                  onChange={e => setInput(e.target.value)}
               />{' '}
               {showModal && (
                  <div className={s.modal}>
                     <div className={s.modalContent}>
                        <div>
                           {input <= 25 ? (
                              t('defaultValue')
                           ) : (
                              <p>
                                 <b>{input}</b> {t('selectedValue')}
                              </p>
                           )}
                        </div>
                     </div>
                  </div>
               )}
               <button
                  className={
                     rightDouble > 0
                        ? s.addButton2
                        : s.addButton && theme === 'Light'
                          ? s.addButton3
                          : s.addButton4
                  }
                  onClick={handleClick}>
                  {' '}
                  <b>{t('setInterval')}</b>
               </button>
            </label>
         </div>
      </div>
   )
}

export { Right }
