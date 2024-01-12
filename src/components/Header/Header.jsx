import React from 'react'
import style from "./Header.module.scss"
import LeftButton from '../LeftButton/LeftButton';
import MidButton from '../MidButton/MidButton';
import RightButton from '../RightButton/RightButton';
import Titles from '../Titles/Titles';
import ClickMe from '../ClickMe/ClickMe';
import Reset from '../Reset/Reset';
const Header = () => {


    return (

        <div className={style.flexBlock}>
            <div className={style.header}>
                <Titles />
                <ClickMe />
                <div className={style.container__display}>
                    <LeftButton />
                    <MidButton />
                    <RightButton />
                </div>



            </div >
            <Reset/>
        </div>
    )
}

export default Header