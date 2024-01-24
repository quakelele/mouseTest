import React from 'react'
import s from './Home.module.scss'
import { Layout } from "../../components/Layout/Layout";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import russia from "../../img/russa.png";
import usa from "../../img/usa.png";
const Home = () => {
    const { t, i18n } = useTranslation();
    const [close, setClose] = React.useState(false);
    const [language, setLanguage] = React.useState("false");
    const { theme } = useSelector((state) => state.click);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    const langHandler = () => {
        setLanguage(!language);
        if (language) {
            changeLanguage("ru");
        } else {
            changeLanguage("en");
        }
    };


    return (
        <div className={s.home}>
            <div className={s.btnFlag}>
                <button
                    className={theme === "Light" ? s.readmebtn2 : `${s.readmebtn}`}
                    onClick={() => setClose(!close)}
                >
                    {t("readme")}
                </button>
                <img
                    onClick={langHandler}
                    className={s.russia}
                    src={language ? russia : `${usa}`}
                    alt="Mouse"
                />
            </div>
            <div className={close ? s.modal : `${s.modal2}`}>
                <div className={s.close}>
                    <h2 onClick={() => setClose(!close)}>&#215;</h2>
                    <img
                        onClick={langHandler}
                        className={s.russia2}
                        src={language ? russia : `${usa}`}
                        alt="Mouse"
                    />
                </div>
                <div className={s.titles}>
                    {" "}
                    <h1>{t("howItWorks")}</h1>
                    <p>{t("descrFaq")}</p>
                </div>
            </div>
            <Layout t={t}/>
        </div>
    );
}
export default Home