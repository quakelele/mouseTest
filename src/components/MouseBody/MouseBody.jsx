import { ScrollButton } from '../MouseButtons/ScrollButton/ScrollButton'
import { RightButton } from '../MouseButtons/RightButton/RightButton'
import { ResetButton } from '../MouseButtons/ResetButton/ResetButton'
import { LeftButton } from '../MouseButtons/LeftButton/LeftButton'
import { useSelector } from 'react-redux'
import bodyFnatic from '../../assets/bodyFnatic.png'
import bodyFnaticW from '../../assets/bodyFnaticW.png'
import s from './MouseBody.module.scss'

export const MouseBody = () => {
   const { theme } = useSelector(state => state.click)

   return (
      <div className={s.wrapper}>
         <img
            className={s.mouse}
            src={theme === 'Light' ? bodyFnaticW : bodyFnatic}
            alt="Mouse"
         />
         <LeftButton />
         <RightButton />
         <ScrollButton />
         <ResetButton />
      </div>
   )
}
