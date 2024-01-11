import React from 'react'
import style from "./Header.module.scss"
import LeftButton from '../LeftButton/LeftButton';
import MidButton from '../MidButton/MidButton';
import RightButton from '../RightButton/RightButton';
import Titles from '../Titles/Titles';
import ClickMe from '../ClickMe/ClickMe';
const Header = () => {


    return (

        <div className={style.header}>
            <Titles />
            <ClickMe />
            <div className={style.container__display}>
                <LeftButton />
                <MidButton />
                <RightButton />
            </div>
            <button className={style.resetBtn}>Сброс</button>


        </div >

    )
}

export default Header