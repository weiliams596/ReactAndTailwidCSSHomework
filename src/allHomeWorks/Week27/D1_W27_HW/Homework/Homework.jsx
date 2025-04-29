import React, { useState } from "react";


export default function Homework() {
  const [color, setColor] = useState("white");
  const RandomColorBox = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <main>
      {document.title = "Homework"}
      <h1>Homework 27</h1>
      <div
        style={{ backgroundColor: color }}
        className="random-color-box"
        onClick={(e) => setColor(RandomColorBox)}></div>
      <button onClick={() => setColor(RandomColorBox())}>
        Random color change
      </button>
    </main>
  );
}
