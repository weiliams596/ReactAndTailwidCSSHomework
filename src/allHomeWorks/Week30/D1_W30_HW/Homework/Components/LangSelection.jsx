import React, { useContext, useEffect, useState } from "react";

import GlobalContex from "../../../../../MyContext";

export default function LangSelection() {
    const {info,setInfo} = useContext(GlobalContex);
    const [lang, setLang] = useState('en');
    useEffect(()=>{
      setInfo({...info,langType:lang});
    },[lang]);
  return (
    <div className="lang-selection">
      <select name="lang" id="lang-select" onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="kk">Қазақша</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
}
