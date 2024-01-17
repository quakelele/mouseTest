import React from 'react'
import s from './Scroll.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setInputIntervalMidle } from '../../../redux/slices/clickSlice'
import { IoIosClose } from "react-icons/io";
const Scroll = () => {
    const dispatch = useDispatch()
    const { onOff } = useSelector(state => state.click)
    const { midle } = useSelector(state => state.click)
    const { midleDouble, timeMid } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')
    const [showModal, setShowModal] = React.useState(false);
    const handleClick = () => {

        setShowModal(true);
        // Спрятать модальное окно через 3 секунды
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
        if (input <= 25) {
            setInput(25)
        }
        dispatch(setInputIntervalMidle(input));
    };

    React.useEffect(() => {
        return () => clearTimeout();
    }, []);

    return (

        <div className={midleDouble > 0 ? s.midClickWrapper2 : `${s.midClickWrapper}` && onOff ? s.midClickWrapper4 : `${s.midClickWrapper3}`}>
            <h4 >Scroll: <span>{midle > 0 ? midle : ''}</span>  </h4>
            <h4>Double: <span >{midleDouble > 0 ? midleDouble : ''}</span> </h4>
            <h4>Interval: <span>{midleDouble > 0 ? `${timeMid} ms` : `${""} `}</span> </h4>
            <label className={midleDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <IoIosClose onClick={() => setInput('')} className={s.closeTag} />
                <input
                    value={input}
                    placeholder='def:25'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={midleDouble > 0 ? s.addButton2 : `${s.addButton}` && onOff ? s.addButton3 : `${s.addButton4}`}
                    onClick={handleClick} > set interval </button>

                {showModal && (
                    <div className={s.modal}>
                        <div className={s.modalContent}>
                            <p><b></b>
                                {input <= 25 ? "default value is 25 ms.." : <p><b>{input}</b> ms selected</p>}</p>
                        </div>
                    </div>
                )}
                <div className={s.ebal}>  </div>
            </label>
        </div>
    )
}

export { Scroll }