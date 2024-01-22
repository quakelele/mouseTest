import React from 'react'
import s from './Home.module.scss'
import { Layout } from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import russa from "../../img/russa.png";
import usa from "../../img/usa.png";
const Home = () => {
    const { t, i18n } = useTranslation();
    const [on, setOn] = React.useState(false);
    const [lang, setLang] = React.useState(false);
    const { onOff } = useSelector((state) => state.click);
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const langHandler = () => {
        setLang(!lang);
        if (lang) {
            changeLanguage("ru");
        } else {
            changeLanguage("en");
        }
    };
    return (
        <div className={s.home}>
            <div className={s.btnFlag}>
                <button
                    className={onOff ? s.readmebtn2 : `${s.readmebtn}`  }
                    onClick={() => setOn(!on)}
                >
                    {t("readme")}
                </button>
                <img
                    onClick={langHandler}
                    className={s.russia}
                    src={lang ? russa : `${usa}`}
                    alt="Mouse"
                />
            </div>
            <div className={on ? s.modal : `${s.modal2}`}>
                <div className={s.close}>
                    <h2 onClick={() => setOn(!on)}>&#215;</h2>
                    <img
                        onClick={langHandler}
                        className={s.russia2}
                        src={lang ? russa : `${usa}`}
                        alt="Mouse"
                    />
                </div>
                <div className={s.titles}>
                    {" "}
                    <h1>{t("howItWorks")}</h1>
                    <p>{t("descrFaq")}</p>
                </div>
            </div>
            <Layout />
        </div>
    );
}
export default Home