import React from 'react'
import style from "./Titles.module.scss"
const Titles = () => {
    return (
        <div>
            <h1>Проверьте свою мышку на дабл-клик баг!</h1>
            <h2>Вы думаете, что ваша мышь дважды щелкает, но не уверены?</h2>
            <h2>Нажмите кнопку <b style={{opacity: ".7"}}>CLICK ME!</b> и узнайте!</h2>
        </div>
    )
}

export default Titles