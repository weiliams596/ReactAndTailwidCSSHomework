import React, { useState, useEffect } from "react";

export default function Homework() {
  const [data, setData] = useState(() => {
    const dat = JSON.parse(localStorage.getItem("data")) || null;
    return dat || [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.textContent;
    console.log(name);
    if (data.includes(name)) {
      data.splice(data.indexOf(name), 1);
      data.unshift(name);
    } else {
      data.unshift(name);
    }
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <div>
      <h1>Өнімдер</h1>
      <div className="button-list">
        <button onClick={handleClick}>Телефон</button>
        <button onClick={handleClick}>Ноутбук</button>
        <button onClick={handleClick}>Құлаққап</button>
        <button onClick={handleClick}>Құлаққап</button>
        <button onClick={handleClick}>Сағат</button>
        <button onClick={handleClick}>Камера</button>
      </div>
      <div className="shower">
        {data.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}
