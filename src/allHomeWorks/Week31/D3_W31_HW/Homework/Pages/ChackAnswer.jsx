import React, { useContext, useReducer } from "react";
import AnswerContext from "../Components/AnswerContext";

const initialState = {
  message: "",
  type: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        message: "Correct Answer",
        type: "success",
      };
    case "error":
      return {
        message: "Wrong Answer",
        type: "error",
      };
    case "clear":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default function ChackAnswer({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <AnswerContext.Provider value={{ state, dispatch }}>
        {state.type !== "" && (
          <p
            style={
              state.type === "error" ? { backgroundColor: "red" } : { backgroundColor: "green" }
            }>
            {state.message}
          </p>
        )}
        {children}
      </AnswerContext.Provider>
    </div>
  );
}
