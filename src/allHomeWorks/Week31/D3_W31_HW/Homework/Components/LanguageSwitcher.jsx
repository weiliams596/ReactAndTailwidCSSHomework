import React, { useContext } from "react";
import Context from "./Context";

export default function LanguageSwitcher() {
  const { state,dispatch ,languageObject} = useContext(Context);
  return (
    <div className="lang-select">
      <select name="language" id="language" value={state.language}  onChange={(e) => dispatch({ type: "SET_LANGUAGE", payload: e.target.value })}>
        {Object.keys(languageObject).map((key) => {
          return (
            <option key={key} value={key} >
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}
