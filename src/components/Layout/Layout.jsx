import React from 'react'
import s from './Layout.module.scss'
import MouseBody from "../MouseBody/MouseBody"
import { Left } from '../ButtonInfo/Left/Left'
import { Right } from "../ButtonInfo/Right/Right"
import { Scroll } from '../ButtonInfo/Scroll/Scroll'
import { ResetButton } from '../ResetButton/ResetButton'

const Layout = () => {

    return (
        <div className={s.wrapper}>
            <h4>Test the capability of your mouse to register double clicks!</h4>
            <div className={s.wrapper__inner}>
                <Left />
                <Right />
                <Scroll />
                {/* <ResetButton/> */}
            </div>
            <div className={s.mouseBody}>
                <MouseBody />
            </div>
            <h4>Fnatic Boltz </h4><p>(don't buy this shit)</p>
        </div>
    )
}

export default Layout