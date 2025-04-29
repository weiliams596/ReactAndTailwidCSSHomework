import React, { useState } from "react";

export default function Homework() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const homePage=()=>{
    return (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>Жүйеге кіру қажет</h1>
        <button onClick={() => {setPageIndex(1);setLoggedIn(true);}}>Login</button>
        {!isLoggedIn && <button onClick={() => setPageIndex(2)}>Register</button>}
      </div>
    );
  }
  
  const registerPage=()=>{
    const handleSubmit = (event) => {
      event.preventDefault();
      setPageIndex(0);
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    );
  }

  const loginPage=()=>{
    return (
      <div>
        <h1>Бастапқы бетке қош келдіңіз</h1>
        <button onClick={(e)=>{e.preventDefault();setLoggedIn(false);setPageIndex(0);}}>log out</button>
      </div>
    );
  }

  return (
    <div>
      {document.title = "Homework"}
      {pageIndex === 0 && homePage()}
      {(pageIndex === 1 && isLoggedIn) && loginPage()}
      {pageIndex === 2 && registerPage()}
    </div>
  );
}
