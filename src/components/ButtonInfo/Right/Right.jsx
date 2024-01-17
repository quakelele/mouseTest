import React from 'react'
import s from './Right.module.scss'
import { setInputIntervalRight } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosClose } from "react-icons/io";
const Right = () => {
    const { onOff } = useSelector(state => state.click)
    const dispatch = useDispatch()
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')
    const { right, } = useSelector(state => state.click)

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
        dispatch(setInputIntervalRight(input));
    };


    React.useEffect(() => {
        return () => clearTimeout();
    }, []);


    return (
        <div className={rightDouble > 0 ? s.rightClickWrapper2 : `${s.rightClickWrapper}` && onOff ? s.rightClickWrapper4 : `${s.rightClickWrapper3}`}>
            <h4 >Right: <span>{right > 0 ? right : ''}</span>  </h4>
            <h4>Double: <span >{rightDouble > 0 ? rightDouble : ''}</span> </h4>
            <h4>Interval: <span>{rightDouble > 0 ? `${timeRight} ms` : `${""}`}</span> </h4>
            <label className={rightDouble > 0 ? s.inputz2 : `${s.inputz}`}>
            <IoIosClose onClick={() => setInput(25)} className={s.closeTag} />
                <input
                   value={input}
                    placeholder='def:25'
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className={rightDouble > 0 ? s.addButton2 : `${s.addButton}` && onOff ? s.addButton3 : `${s.addButton4}`}
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

export { Right }