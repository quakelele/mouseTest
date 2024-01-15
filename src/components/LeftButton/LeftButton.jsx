import React from 'react'
import s from './LeftButton.module.scss'
import LeftWhite from "../../img/LeftWhite.png"
import LeftRed from "../../img/LeftRed.png"
import { useDispatch, useSelector } from 'react-redux'
import { setLeft } from '../../redux/slices/clickSlice'
import { useState } from 'react'
import { setTimeDoubleClickLeft, setLeftDouble } from '../../redux/slices/doubleClickSlice'
const LeftButton = () => {
  const { intervalLeft } = useSelector(state => state.click)
  const [timeLeft, setTimeLeft] = useState(0);
  const { leftDouble } = useSelector(state => state.doubleClick)
  const dispatch = useDispatch()

  const leftClick = () => {
    dispatch(setLeft())
    const currentTimeLeft = new Date().getTime();
    const timeDiffLeft = currentTimeLeft - timeLeft;

    if (timeDiffLeft < `${intervalLeft}`) {
      console.log(`Left click at: ${timeDiffLeft} ms`);
      dispatch(setLeftDouble())
      dispatch(setTimeDoubleClickLeft(timeDiffLeft))
    }
    setTimeLeft(currentTimeLeft);
  };


  return (
    <div onClick={leftClick}>
      <img className={leftDouble ? s.leftButtonR : ` ${s.leftButtonW}`} src={LeftRed} alt="Left Button" />
      <img className={s.leftButtonW} src={leftDouble ? LeftRed : `${LeftWhite}`} alt='left Button' />
    </div>
  )
}

export default LeftButton