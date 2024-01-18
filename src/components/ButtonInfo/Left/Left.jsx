import React from 'react'
import { setInputIntervalLeft, resetAll,ebalayka } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import s from './Left.module.scss'
import { IoIosClose } from "react-icons/io";
const Left = () => {
    const dispatch = useDispatch()
    const { onOff, left, intervalLeft } = useSelector(state => state.click)
    const { leftDouble, timeLeft } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState('')
    const [showModal, setShowModal] = React.useState(false);
    const handleClick = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
        if (input <= 25) {
            setInput(25)

        }
        dispatch(setInputIntervalLeft(input));
    };
    React.useEffect(() => {
        return () => clearTimeout();
    }, []);
    const resetInput = () => {
        dispatch(setInputIntervalLeft(25))
        setInput('')

    };
 
    return (
        <div
            className={leftDouble > 0 ? s.leftClickWrapper2 : `${s.leftClickWrapper}` && onOff ? s.leftClickWrapper4 : `${s.leftClickWrapper3}`}>
            <h4 >Left: <span>{left > 0 ? left : ''}</span>  </h4>
            <h4>Double: <span >{leftDouble > 0 ? leftDouble : ''}</span> </h4>
            <h4>Interval: <span>{leftDouble > 0 ? `${timeLeft} ms` : `${""}`}</span> </h4>
            <label className={leftDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <IoIosClose onClick={resetInput} className={s.closeTag} />
                <input
                    value={input}
                    placeholder='def:25'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className={leftDouble > 0 ? s.addButton2 : `${s.addButton}` && onOff ? s.addButton3 : `${s.addButton4}`}
                    onClick={handleClick} > set interval </button>

                {showModal && (<div className={s.modal}><div className={s.modalContent}><p> {input <= 25 ? "default value is 25 ms.." : <p><b>{input}</b> ms selected</p>} </p> </div></div>)}
                <div className={s.ebal}>  </div>
            </label>
        </div >
    )
}

export { Left }