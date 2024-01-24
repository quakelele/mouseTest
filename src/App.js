import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./App.module.scss";
import Home from "./components/Home/Home";
import { setTheme } from "./redux/slices/clickSlice";
function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.click);
  
  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "Light"
      ? (document.body.style.backgroundColor = "rgba(0, 0, 0, .950)")
      : (document.body.style.backgroundColor = "#e6e6e6");
  }, [theme]);

  return (
    <div className={s.app}>
      <Home />
    </div>
  );
}

export default App;
