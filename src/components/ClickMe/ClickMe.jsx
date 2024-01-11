import React from 'react'
import { useDispatch } from 'react-redux'
import { setLeft, setRight, setMidle } from '../../redux/slices/clickSlice'
import { setTimeDoubleClickRight, setMidleDouble, setTimeDoubleClickLeft, setTimeDoubleClickMid, setRightDouble, setLeftDouble } from '../../redux/slices/doubleClickSlice'

import style from './ClickMe.module.scss'
const ClickMe = () => {
    const [time, setTime] = React.useState(0);
    const dispatch = useDispatch()

    const midleClick = (e) => {
        if (e.button === 1) { dispatch(setMidle()) }
        const currentTimeMid = new Date().getTime();
        const timeDiffMid = currentTimeMid - time;

        if (timeDiffMid < 250) {
            console.log(`MidleClick at: ${timeDiffMid} ms`);
            dispatch(setMidleDouble())
            dispatch(setTimeDoubleClickMid(timeDiffMid))
        }
        setTime(currentTimeMid);
    };


    const leftClick = () => {
        dispatch(setLeft())
        const currentTimeLeft = new Date().getTime();
        const timeDiffLeft = currentTimeLeft - time;

        if (timeDiffLeft < 50) {
            console.log(`Leftclick at: ${timeDiffLeft} ms`);
            dispatch(setLeftDouble())
            dispatch(setTimeDoubleClickLeft(timeDiffLeft))
        }
        setTime(currentTimeLeft);
    };
    return (
        <>
            <button
                className={style.clickBtn}
                onAuxClick={midleClick}
                onClick={leftClick}
            ><h4>CLICK ME!</h4>
            </button >

        </>
    )
}

export default ClickMe