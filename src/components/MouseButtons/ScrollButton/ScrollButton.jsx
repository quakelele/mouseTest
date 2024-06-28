import {
   setMidleDouble,
   setTimeDoubleClickMid,
} from '../../../redux/slices/doubleClickSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setMidle } from '../../../redux/slices/clickSlice'
import { useState } from 'react'
import MidWhite from '../../../assets/MidWhite.png'
import MidRed from '../../../assets/MidRed.png'
import s from './ScrollButton.module.scss'

export const ScrollButton = () => {
   const { intervalMidle } = useSelector(state => state.click)
   const [timeMid, setTimeMid] = useState(0)
   const { midleDouble } = useSelector(state => state.doubleClick)
   const dispatch = useDispatch()

   const midleClick = e => {
      if (e.button === 1) {
         e.preventDefault()
         dispatch(setMidle())
         const currentTimeMid = new Date().getTime()
         const timeDiffMid = currentTimeMid - timeMid
         if (timeDiffMid < intervalMidle) {
            console.log(`Midle click at: ${timeDiffMid} ms`)
            dispatch(setMidleDouble())
            dispatch(setTimeDoubleClickMid(timeDiffMid))
         }
         setTimeMid(currentTimeMid)
      }
   }
   return (
      <div onMouseDown={midleClick}>
         <img
            className={midleDouble ? s.midButtonR : s.midButtonW}
            src={MidRed}
            alt="midR Button"
         />
         <img
            className={s.midButtonW}
            src={midleDouble ? MidRed : `${MidWhite}`}
            alt="midW Button"
         />
      </div>
   )
}
