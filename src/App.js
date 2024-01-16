import style from "./App.module.scss";
// import Header from "./components2/Header/Header";
import React from "react";
import Layout from "./components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { onOff } = useSelector((state) => state.click);
  React.useEffect(() => {
    onOff
      ? (document.body.style.backgroundColor = "BLACK")
      : (document.body.style.backgroundColor = "#e6e6e6");
  }, [onOff]);

  return (
    <div className={style.App}>
      <Layout />
    </div>
  );
}

export default App;
