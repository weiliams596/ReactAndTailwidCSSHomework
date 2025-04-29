import React from "react";

export default function Homework() {
  const changeHandler = (event) => {
    console.log(event.target.value.toUpperCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!");
  };

  return (
    <div className="homework-div">
      {document.title = "Homework"}
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-text">Plase enter your text:</label>
        <input type="text" id="input-text" onChange={changeHandler} />
      </form>
    </div>
  );
}
