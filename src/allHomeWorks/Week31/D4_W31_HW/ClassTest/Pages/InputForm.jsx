import React, { useReducer, useState } from "react";

import WorkContext from "../Components/WorkContext";
import WorkList from "./WorkList";

const initialState = {
  workListLength: 0,
  workList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_WORK":
      return {
        ...state,
        workListLength: state.workListLength + 1,
        workList: [...state.workList, action.newWork],
      };
      break;
    case "REMOVE_WORK":
      return {
        ...state,
        workListLength: state.workListLength - 1,
        workList: state.workList.filter(
          (work, index) => index !== action.index
        ),
      };
      break;
    case "TOGGLE_DONE":
      const doneWorkList = [...state.workList];
      doneWorkList[action.index].isDone = action.isDone;
      console.log(doneWorkList);
      return {
        ...state,
        workList: [...doneWorkList],
      };
    case "UPDATE_WORK":
      const newWorkList = [...state.workList];
      newWorkList[action.index] = action.newWork;
      return {
        ...state,
        workList: [...newWorkList],
      };
    default:
      return state;
  }
};

export default function InputForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newWork, setNewWork] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nWork = { title: newWork, isDone: false };
    dispatch({ type: "ADD_WORK", newWork: nWork });
    setNewWork("");
  };

  return (
    <WorkContext.Provider value={{ state, dispatch }}>
      <h1>Work list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newWork}
          onChange={(e) => setNewWork(e.target.value)}
        />
        <button type="submit">Add new work</button>
      </form>
      <WorkList />
    </WorkContext.Provider>
  );
}
