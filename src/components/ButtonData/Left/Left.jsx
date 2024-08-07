import { setInputIntervalLeft } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import s from './Left.module.scss'

const Left = ({ t }) => {
   const dispatch = useDispatch()
   const { theme, left } = useSelector(state => state.click)
   const { leftDouble, timeLeft } = useSelector(state => state.doubleClick)
   const [input, setInput] = useState('')
   const [showModal, setShowModal] = useState(false)

   const handleClick = () => {
      setShowModal(true)
      setTimeout(() => {
         setShowModal(false)
      }, 3000)
      if (input <= 25) {
         setInput(25)
      }
      dispatch(setInputIntervalLeft(input))
   }

   useEffect(() => {
      return () => clearTimeout()
   }, [])

   const resetInput = () => {
      dispatch(setInputIntervalLeft(25))
      setInput('')
   }

   return (
      <div className={s.wrapper}>
         <div
            className={
               leftDouble > 0
                  ? s.leftWRed
                  : s.leftWDef && theme === 'Light'
                    ? s.leftWWhite2
                    : s.leftWWhite
            }>
            <h4>
               {t('Left')}: <span>{left > 0 && left}</span>{' '}
            </h4>
            <h4>
               {t('Double')}: <span>{leftDouble > 0 && leftDouble}</span>{' '}
            </h4>
            <h4>
               {t('Interval')}:{' '}
               <span>{leftDouble > 0 && `${timeLeft} ms`}</span>{' '}
            </h4>
            <label className={leftDouble > 0 ? s.inputz2 : s.inputz}>
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
                     leftDouble > 0
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

export { Left }
