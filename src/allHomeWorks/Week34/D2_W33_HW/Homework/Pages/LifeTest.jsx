import React, { useEffect, useState } from "react";

export default function LifeTest() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Mounted");
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Таймер…");
  }, [timer]);
  return (
    <div>
      <h1>Timer:{timer}</h1>
    </div>
  );
}
