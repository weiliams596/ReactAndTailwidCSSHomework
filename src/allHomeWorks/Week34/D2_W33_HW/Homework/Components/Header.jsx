import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-cyan-400 mt-2 mb-2 w-full">
      <div className="flex justify-around items-center py-4">
        <Link to="/HW24/">Home</Link>
        <Link to="/HW24/timer">Timer</Link>
        <Link to="/HW24/data">Data</Link>
      </div>
    </header>
  );
}
