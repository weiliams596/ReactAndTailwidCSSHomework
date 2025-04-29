import React, { useEffect, useReducer } from "react";

const initialState = {
  lastUser: "",
  isLoading:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading:true
      }
    case "UPDATE_USER":
      localStorage.setItem("lastUser", action.payload);
      return {
        ...state,
        lastUser: action.payload,
        isLoading:false
      };
    default:
      return state;
  }
};

export default function Homework() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const lastUser = localStorage.getItem("lastUser");
    if (lastUser) {
      dispatch({ type: "UPDATE_USER", payload: lastUser });
    }
  }, []);
  return (
    <div>
      <form>
        <label>Insert new user:</label>
        <input type="text" />
        <button
          type="submit"
          onClick={() => {
            dispatch({ type: "LOADING" });
            setTimeout(() => {
              dispatch({
                type: "UPDATE_USER",
                payload: document.querySelector("input").value,
              });
            }, 1000);
          }}>
          Submit
        </button>
        <p>Last user: {state.lastUser}</p>
        {state.isLoading && <p>Loading...</p>}
      </form>
    </div>
  );
}
