import React from 'react'
import s from './RightButton.module.scss'
import RightWhite from "../../img/RightWhite.png"
import RIGHTBLACK from "../../img/RIGHTBLACK.png"
import blurred from "../../img/blurred.png"
import RightRed from "../../img/RightRed.png"
import { useDispatch, useSelector } from 'react-redux'
import { setRight } from '../../redux/slices/clickSlice'
import { useState } from 'react'
import { setTimeDoubleClickRight, setRightDouble } from '../../redux/slices/doubleClickSlice'


const RightButton = () => {
    const { intervalRight, theme } = useSelector(state => state.click)
    const [timeRight, setTimeRight] = useState(0);
    const { rightDouble } = useSelector(state => state.doubleClick)
    const dispatch = useDispatch()
    const rightClick = (e) => {
        if (e.button === 2) {
            e.preventDefault();
            dispatch(setRight())
            const currentTimeRight = new Date().getTime();
            const timeDiffRight = currentTimeRight - timeRight;

            if (timeDiffRight < `${intervalRight}`) {
                console.log(`Right click at: ${timeDiffRight} ms`);
                dispatch(setRightDouble())
                dispatch(setTimeDoubleClickRight(timeDiffRight))
            }
            setTimeRight(currentTimeRight);
        }
    };

    return (
        <div onContextMenu={rightClick}>
            <img className={rightDouble ? s.rightButtonR : `${s.rightButtonW}`} src={RightRed} alt="Right Button" />
            {theme ?
                (<img className={s.rightButtonW} src={rightDouble ? RightRed : `${RIGHTBLACK}`} alt="Right Button" />)
                :
                (<img className={s.rightButtonW} src={rightDouble ? RightRed : `${RightWhite}`} alt="Right Button" />)}
        </div>
    )
}

export { RightButton }