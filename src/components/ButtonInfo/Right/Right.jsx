import React from 'react'
import s from './Right.module.scss'
import { setInputIntervalRight } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
const Right = () => {

    const dispatch = useDispatch()
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState(25)
    const { right, } = useSelector(state => state.click)

    const [showModal, setShowModal] = React.useState(false);
    const handleClick = () => {
        setShowModal(true);
        // Спрятать модальное окно через 3 секунды
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
        dispatch(setInputIntervalRight(input));
    };


    React.useEffect(() => {
        return () => clearTimeout();
    }, []);


    return (
        <div className={rightDouble > 0 ? s.rightClickWrapper2 : `${s.rightClickWrapper}`}>
            <h4>Right: <span>{right}</span> </h4>
            <h4>Double: <span>{rightDouble}</span> </h4>
            <h4>Interval: <span>{rightDouble > 0 ? `${timeRight} ms` : `${""}`}</span> </h4>
            <label className={rightDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <input
                    value={input}
                    placeholder='def:25'
                    onChange={(e) => setInput(e.target.value)}
                />

<button className={s.addButton}
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