import { useDispatch, useSelector } from 'react-redux'
import {
   resetAll,
   setInputIntervalMidle,
} from '../../../redux/slices/clickSlice'
import {
   setReset,
   setTimeDoubleClickLeft,
} from '../../../redux/slices/doubleClickSlice'
import Reset from '../../../assets/Reset.png'
import ResetB from '../../../assets/ResetB.png'
import s from './ResetButton.module.scss'

export const ResetButton = () => {
   const { theme } = useSelector(state => state.click)
   const dispatch = useDispatch()
   const setResetAll = () => {
      dispatch(setReset())
      dispatch(resetAll())
      dispatch(setTimeDoubleClickLeft())
      dispatch(setInputIntervalMidle())
   }
   return (
      <div onClick={setResetAll}>
         <img
            className={s.resetButton}
            src={theme === 'Light' ? ResetB : Reset}
            alt="Reset Button"
         />
      </div>
   )
}
