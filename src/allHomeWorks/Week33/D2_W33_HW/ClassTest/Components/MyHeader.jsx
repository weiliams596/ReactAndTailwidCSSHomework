import React from "react";

import menum from '../Assets/list.svg';

export default function MyHeader() {
  return (
    <header className="w-full h-[40px] flex flex-row justify-end px-2">
      <div className="flex flex-row sm:hidden">
        <nav className="px-4 py-2">Works</nav>
        <nav className="px-4 py-2">Blog</nav>
        <nav className="px-4 py-2">Contact</nav>
      </div>
      <div className="hidden sm:flex">
        <img className="w-8 h-8" src={menum} alt="list" />
      </div>
    </header>
  );
}
