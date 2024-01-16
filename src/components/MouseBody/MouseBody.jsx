import React from 'react'
import s from './MouseBody.module.scss'
import LeftButton from '../LeftButton/LeftButton'
import { RightButton } from '../RightButton/RightButton'
import { ScrollButton } from '../ScrollButton/ScrollButton'
import { ResetButton } from '../ResetButton/ResetButton'
import bodyFnatic from "../../img/bodyFnatic.png"
import bodyFnaticW from "../../img/bodyFnaticW.png"
import { useSelector } from 'react-redux'

const MouseBody = () => {
    const { onOff } = useSelector(state => state.click)
    return (
        <div>

            <div className={s.mouseContainer}>
                <img className={s.mouse} src={onOff ? bodyFnaticW : bodyFnatic} alt="Mouse" />
                {/* <img className={s.mouse2} src={bodyFnaticW} alt="Mouse" /> */}
                <LeftButton />
                <RightButton />
                <ScrollButton />
                <ResetButton />

            </div>
        </div>
    )
}

export default MouseBody
