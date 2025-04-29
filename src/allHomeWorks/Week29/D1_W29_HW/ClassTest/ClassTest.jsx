import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header";

export default function ClassTest() {
  return (
    <div>
      <h1>Class Test page</h1>
      <Header />
      <Outlet />
    </div>
  );
}
