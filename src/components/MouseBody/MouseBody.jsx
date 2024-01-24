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
    const { theme } = useSelector(state => state.click)

    return (

            <div className={s.mouseContainer}>
                <img className={s.mouse} src={theme === "Light" ? bodyFnaticW : bodyFnatic} alt="Mouse" />
                <LeftButton />
                <RightButton />
                <ScrollButton />
                <ResetButton />

            </div>
    )
}

export { MouseBody }
