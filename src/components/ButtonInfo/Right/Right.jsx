import React from 'react'
import s from './Right.module.scss'
import { setInputIntervalRight } from '../../../redux/slices/clickSlice'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosClose } from "react-icons/io";
const Right = ({ t }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [input, setInput] = React.useState('')
    const { rightDouble, timeRight } = useSelector(state => state.doubleClick)
    const { right, onOff } = useSelector(state => state.click)
    const dispatch = useDispatch()

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
    const resetInput = () => {
        dispatch(setInputIntervalRight(25))
        setInput('')
    };

    React.useEffect(() => {
        return () => clearTimeout();
    }, []);


    return (
        <div className={rightDouble > 0 ? s.rightClickWrapper2 : `${s.rightClickWrapper}` && onOff ? s.rightClickWrapper4 : `${s.rightClickWrapper3}`}>
            <h4 >{t('Right')}: <span>{right > 0 ? right : ''}</span>  </h4>
            <h4>{t('Double')}: <span >{rightDouble > 0 ? rightDouble : ''}</span> </h4>
            <h4>{t('Interval')}: <span>{rightDouble > 0 ? `${timeRight} ms` : `${""}`}</span> </h4>
            <label className={rightDouble > 0 ? s.inputz2 : `${s.inputz}`}>
                <IoIosClose onClick={resetInput} className={s.closeTag} />
                <input
                    value={input}
                    placeholder={t('def 25')}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className={rightDouble > 0 ? s.addButton2 : `${s.addButton}` && onOff ? s.addButton3 : `${s.addButton4}`}
                    onClick={handleClick} > <b>{t('setInterval')}</b> </button>

                {showModal && (
                    <div className={s.modal}>
                        <div className={s.modalContent}>
                            <div><b></b>
                                {input <= 25 ? t('defaultValue')  : <p><b>{input}</b> {t('selectedValue')}</p>}</div>
                        </div>
                    </div>
                )}
                <div className={s.ebal}>  </div>
            </label>
        </div>
    )
}

export { Right }