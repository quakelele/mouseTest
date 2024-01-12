import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setLeft, setRight, setMidle } from '../../redux/slices/clickSlice'
import { setTimeDoubleClickRight, setMidleDouble, setTimeDoubleClickLeft, setTimeDoubleClickMid, setRightDouble, setLeftDouble } from '../../redux/slices/doubleClickSlice'

import style from './ClickMe.module.scss'
const ClickMe = () => {
    const {intervalLeft,intervalRight,intervalMidle} = useSelector(state=> state.click)
    const [timeLeft, setTimeLeft] = useState(0);
    const [timeRight, setTimeRight] = useState(0);
    const [timeMid, setTimeMid] = useState(0);
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

    const midleClick = (e) => {
        if (e.button === 1) {
            dispatch(setMidle())
            const currentTimeMid = new Date().getTime();
            const timeDiffMid = currentTimeMid - timeMid;

            if (timeDiffMid < `${intervalMidle}`) {
                console.log(`Midle click at: ${timeDiffMid} ms`);
                dispatch(setMidleDouble())
                dispatch(setTimeDoubleClickMid(timeDiffMid))
            }
            setTimeMid(currentTimeMid);
        }
    };

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
        <>
          
            <button
                className={style.clickBtn}
                onAuxClick={midleClick}
                onContextMenu={rightClick}
                onClick={leftClick}
            ><h4>CLICK ME!</h4>
            </button >
            <p></p>
        </>
    )
}

export default ClickMe