import React from 'react'
import s from './MouseBody.module.scss'
import LeftButton from '../LeftButton/LeftButton'
import { RightButton } from '../RightButton/RightButton'
import { ScrollButton } from '../ScrollButton/ScrollButton'
import { ResetButton } from '../ResetButton/ResetButton'
import bodyFnatic from "../../img/bodyFnatic.png"


const MouseBody = () => {

    return (
        <div>
           
            <div className={s.mouseContainer}>
                <img className={s.mouse} src={bodyFnatic} alt="Mouse" />
                <LeftButton />
                <RightButton />
                <ScrollButton />
                <ResetButton />

            </div>
        </div>
    )
}

export default MouseBody
