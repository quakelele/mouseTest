import style from "./App.module.scss";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <div className={style.App}>
      <Header />
    </div>
  );
}

export default App;
