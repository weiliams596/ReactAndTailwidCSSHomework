import React, { useState } from "react";

export default function ToDoList() {
  const [list, setList] = useState([
    { taskName: "Tidy house", isDone: true },
    { taskName: "Buy groceries", isDone: false },
  ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("insert");
    setList([...list, { taskName: input.value, isDone: false }]);
    input.value = "";
  };
  return (
    <div style={{ color: "red" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-list">To Do List:</label>
        <input id="insert" type="text" onKeyDown={(e) => {if(e.key==='Enter'){handleSubmit(e)}}} />
        <button>Add</button>
      </form>
      <div className="todo-list" style={{ color: "blue" }}>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.taskName}</h2>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => {
                  list[index].isDone = !list[index].isDone;
                  setList([...list]);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
