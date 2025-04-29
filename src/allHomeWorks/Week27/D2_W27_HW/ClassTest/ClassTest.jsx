import React, { useState } from "react";
import ToDoList from "./ToDoList";


export default function ClassTest() {
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
      }}>
      {document.title = "Class Test"}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <p>This is the secret message</p>}
      <ToDoList />
    </div>
  );
}
