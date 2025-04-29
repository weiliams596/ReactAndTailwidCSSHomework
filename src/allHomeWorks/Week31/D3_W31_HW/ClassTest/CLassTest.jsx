import React from "react";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import Shower from "./Pages/Shower";
import Context from "./Components/Context";
import AnswerButtons from "./Components/AnswerButtons";
import ChackAnswer from "./Pages/ChackAnswer";

const languageObject = {
  en: "Hello",
  kk: "Сәлем",
  ru: "Привет",
  tr: "Merhaba",
  zh: "你好",
  tw: "你好",
};

const initialState = {
  language: "en",
  text: languageObject.en,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.payload,
        text: languageObject[action.payload],
      };
    default:
      return state;
  }
};

export default function CLassTest() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      {/* <Context.Provider value={{ state, dispatch, languageObject }}>
        <LanguageSwitcher></LanguageSwitcher>
        <Shower></Shower>
      </Context.Provider> */}
      <ChackAnswer>
      <AnswerButtons/>
      </ChackAnswer>
    </div>
  );
}
