import React from 'react'
import s from './Scroll.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setInputIntervalMidle } from '../../../redux/slices/clickSlice'
const Scroll = () => {
    const dispatch = useDispatch()
    const { midle } = useSelector(state => state.click)
    const { midleDouble, timeMid } = useSelector(state => state.doubleClick)
    const [input, setInput] = React.useState(25)
    const [showModal, setShowModal] = React.useState(false);
    const handleClick = () => {
        setShowModal(true);
        // Спрятать модальное окно через 3 секунды
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
        dispatch(setInputIntervalMidle(input));
    };

    React.useEffect(() => {
        return () => clearTimeout();
    }, []);

    return (
        <div className={midleDouble > 0 ? s.midClickWrapper2 : `${s.midClickWrapper}`}>
            <h4>Scroll: <span> {midle} </span></h4>
            <h4>Double: <span> {midleDouble} </span></h4>
            <h4>Interval: <span>{midleDouble > 0 ? `${timeMid} ms` : `${""} `}</span> </h4>
            <label className={midleDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <input
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

export { Scroll }