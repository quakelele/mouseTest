import React from "react";
import { useSelector } from "react-redux";
import s from "./App.module.scss";
import Home from "./components/Home/Home";
function App() {
  const { onOff } = useSelector((state) => state.click);

  React.useEffect(() => {
    onOff
      ? (document.body.style.backgroundColor = "rgba(0, 0, 0, .950)")
      : (document.body.style.backgroundColor = "#e6e6e6");
  }, [onOff]);
  return (
    <div className={s.app}>
      <Home />
    </div>
  );
}

export default App;
