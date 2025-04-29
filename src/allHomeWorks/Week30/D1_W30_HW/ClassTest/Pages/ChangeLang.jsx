import React, { useContext } from "react";
import GlobalContex from "../../../../../MyContext";

export default function ChangeLang() {
  const { info, setInfo } = useContext(GlobalContex);

  const changeLanguage = () => {
    setInfo({...info, isChinese: !info.isChinese });
  };



  return (
    <div>
      <h1>{(info.isChinese && "作业 useContext") || "Homework useContext"}</h1>
      <div>
        <h3>
          {(info.isChinese && "这是测试组件") || "This is Test Component"}
        </h3>
      </div>
      <button onClick={changeLanguage}></button>
    </div>
  );
}
