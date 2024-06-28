import {
   setTimeDoubleClickLeft,
   setLeftDouble,
} from '../../../redux/slices/doubleClickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setLeft } from '../../../redux/slices/clickSlice'
import LeftWhite from '../../../assets/LeftWhite.png'
import LeftRed from '../../../assets/LeftRed.png'
import LeftBlack from '../../../assets/LEFTBLACK.png'
import s from './LeftButton.module.scss'

export const LeftButton = () => {
   const { intervalLeft, theme } = useSelector(state => state.click)
   const [timeLeft, setTimeLeft] = useState(0)
   const { leftDouble } = useSelector(state => state.doubleClick)
   const dispatch = useDispatch()

   const leftClick = () => {
      dispatch(setLeft())
      const currentTimeLeft = new Date().getTime()
      const timeDiffLeft = currentTimeLeft - timeLeft
      if (timeDiffLeft < intervalLeft) {
         console.log(`Left click at: ${timeDiffLeft} ms`)
         dispatch(setLeftDouble())
         dispatch(setTimeDoubleClickLeft(timeDiffLeft))
      }
      setTimeLeft(currentTimeLeft)
   }

   return (
      <div onClick={leftClick}>
         <img
            className={leftDouble ? s.leftButtonR : s.leftButtonW}
            src={LeftRed}
            alt="Left Button"
         />

         {theme ? (
            <img
               className={s.leftButtonW}
               src={leftDouble ? LeftRed : LeftBlack}
               alt="left Button"
            />
         ) : (
            <img
               className={s.leftButtonW}
               src={leftDouble ? LeftRed : LeftWhite}
               alt="left Button"
            />
         )}
      </div>
   )
}
