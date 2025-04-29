import React, { useContext, useEffect, useState } from "react";
import LangSelection from "../Components/LangSelection";
import GlobalContex from "../../../../../MyContext";

import Langs from "../Assets/lang.config.json";

export default function Shower() {
  const [lang, setLang] = useState("en");
  const [useLang, setUseLang] = useState({});
  const { info } = useContext(GlobalContex);

  useEffect(() => {
    switch (lang) {
      case "en":
        setUseLang(Langs.en);
        break;
      case "kk":
        setUseLang(Langs.kk);
        break;
      case "ru":
        setUseLang(Langs.ru);
        break;
      default:
        setUseLang(Langs.en);
        break;
    }
  }, [lang]);

  useEffect(() => {
    setLang(info.langType);
  }, [info.langType]);

  return (
    <div className="lang-select-shower">
      <h1>Homework useContext</h1>
      <div className="homework-screen">
        <h2>{useLang.title}</h2>
        <div className="homework-screen">
          <h3>{useLang.nex_title}</h3>
          <p>{useLang.description}</p>
        </div>
      </div>
      <LangSelection />
    </div>
  );
}
