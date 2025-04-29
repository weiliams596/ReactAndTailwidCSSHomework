import React, { useContext, useState } from "react";
import WorkContext from "../Components/WorkContext";

export default function WorkList() {
  const { state, dispatch } = useContext(WorkContext);
  const [newWork, setNewWork] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [isShow, setIsShow] = useState(Boolean(state.workListLength));

  return (
    <div>
      <h1>Yours works list is:</h1>
      {state.workListLength ?
        state.workList.map((work, index) => {
          return (
            <div className="workInfo" key={index}>
              {isEdit && (
                <div className="reset">
                  <input type="text" onChange={(e) => {setNewWork(e.target.value);}} value={newWork} />
                  <button
                    onClick={() => {
                      setIsEdit(false);
                      const newWOrk = {...work,title:newWork};
                      dispatch({
                        type: "UPDATE_WORK",
                        newWork: newWOrk,
                        index: index,
                      });
                    }}>
                    Update
                  </button>
                </div>
              )}
              {!isEdit && <div className="shower">
                <input
                  type="checkbox"
                  // checked={work.isDone}
                  onChange={(e) => {
                    dispatch({ type: "TOGGLE_DONE", index: index ,isDone: e.target.checked });
                  }}
                />
                <h3>{work.title}</h3>
                <button onClick={() => {setIsEdit(true);setNewWork(work.title)}}>Edit</button>
                <button onClick={() => {dispatch({ type: "REMOVE_WORK", index: index });}}>Delete</button>
              </div>}
            </div>
          );
        }):null}
    </div>
  );
}
