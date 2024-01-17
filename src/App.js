import React from "react";
import { Layout } from "./components/Layout/Layout";
import { useSelector } from "react-redux";
function App() {
  const { onOff } = useSelector((state) => state.click);
  React.useEffect(() => {
    onOff
      ? (document.body.style.backgroundColor = "rgba(0, 0, 0, .950)")
      : (document.body.style.backgroundColor = "#e6e6e6");
  }, [onOff]);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
