import {
   setTimeDoubleClickRight,
   setRightDouble,
} from '../../../redux/slices/doubleClickSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setRight } from '../../../redux/slices/clickSlice'
import { useState } from 'react'
import RightWhite from '../../../assets/RightWhite.png'
import RightBlack from '../../../assets/RIGHTBLACK.png'
import RightRed from '../../../assets/RightRed.png'
import s from './RightButton.module.scss'

export const RightButton = () => {
   const { intervalRight, theme } = useSelector(state => state.click)
   const [timeRight, setTimeRight] = useState(0)
   const { rightDouble } = useSelector(state => state.doubleClick)
   const dispatch = useDispatch()

   const rightClick = e => {
      if (e.button === 2) {
         e.preventDefault()
         dispatch(setRight())
         const currentTimeRight = new Date().getTime()
         const timeDiffRight = currentTimeRight - timeRight

         if (timeDiffRight < intervalRight) {
            console.log(`Right click at: ${timeDiffRight} ms`)
            dispatch(setRightDouble())
            dispatch(setTimeDoubleClickRight(timeDiffRight))
         }
         setTimeRight(currentTimeRight)
      }
   }

   return (
      <div onContextMenu={rightClick}>
         <img
            className={rightDouble ? s.rightButtonR : s.rightButtonW}
            src={RightRed}
            alt="Right Button"
         />
         {theme ? (
            <img
               className={s.rightButtonW}
               src={rightDouble ? RightRed : RightBlack}
               alt="Right Button"
            />
         ) : (
            <img
               className={s.rightButtonW}
               src={rightDouble ? RightRed : RightWhite}
               alt="Right Button"
            />
         )}
      </div>
   )
}
