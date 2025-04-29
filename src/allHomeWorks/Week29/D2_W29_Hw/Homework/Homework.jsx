import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Outlet, useLocation } from "react-router-dom";
import WellCome from "./Pages/WellCome";

export default function Homework() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
  },[location]);
  return (
    <div>
      <Header />
      <h1>Homework</h1>
      {isLoggedIn && <WellCome />}
      <Outlet />
    </div>
  );
}
