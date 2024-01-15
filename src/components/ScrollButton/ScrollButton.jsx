import React from 'react'
import s from './ScrollButton.module.scss'
import MidRed from "../../img/MidRed.png"
import MidWhite from "../../img/MidWhite.png"
import { useDispatch, useSelector } from 'react-redux'
import { setMidle } from '../../redux/slices/clickSlice'
import { setMidleDouble, setTimeDoubleClickMid, } from '../../redux/slices/doubleClickSlice'

const ScrollButton = () => {
    const { intervalMidle } = useSelector(state => state.click)
    const [timeMid, setTimeMid] = React.useState(0);
    const { midleDouble } = useSelector(state => state.doubleClick)
    const dispatch = useDispatch()
    const midleClick = (e) => {
        if (e.button === 1) {
            e.preventDefault();
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

    return (

        <div onMouseDown={midleClick}>
            <img className={midleDouble ? s.midButtonR : `${s.midButtonW}`} src={MidRed} alt="midR Button" />
            <img className={s.midButtonW} src={midleDouble ? MidRed : `${MidWhite}`} alt="midW Button" />
        </div>
    )
}

export { ScrollButton }