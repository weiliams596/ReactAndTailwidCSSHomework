import React, { useContext } from "react";

import GlobalContex from "../../../../MyContext";
import ChangeTheme from "./Pages/ChangeTheme";
import ChangeLang from "./Pages/ChangeLang";

export default function ClassTest() {
  const { info, setInfo } = useContext(GlobalContex);
  const handleClick = () => {
    const tempInfo = { ...info };
    tempInfo.Theme
      ? tempInfo.Theme === "light"
        ? (tempInfo.Theme = "dark")
        : (tempInfo.Theme = "light")
      : (tempInfo.Theme = "dark");
    setInfo(tempInfo);
  };
  return (
    <div>
      <h1>Interface useContex API</h1>
      <ChangeTheme />
      <button onClick={handleClick}>
        Change theme to{" "}
        {info.Theme === "light" ? (info.Theme = "dark") : (info.Theme = "light")}
      </button>
      <ChangeLang />
    </div>
  );
}
