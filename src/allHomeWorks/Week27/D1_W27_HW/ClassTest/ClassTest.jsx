import React, { useState, useEffect } from "react";

export default function ClassTest() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [inputArray, setInputArray] = useState([inputText]);
  return (
    <main>
      {document.title = "Class Test"}
      <div className="test1">
        <h1>Class Test</h1>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      <div className="test2">
        <h2>Test2</h2>
        <input
          key={25}
          id={"inputs"}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setInputText("");
              setInputText(e.target.value);
              setInputArray([...inputArray, inputText]);
            }
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setInputText("");
            setInputText(document.getElementById("inputs").value);
            setInputArray([...inputArray, inputText]);
          }}>
          Plus
        </button>
        <div id="shower-list">
          {inputArray.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </main>
  );
}
