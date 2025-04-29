import React from "react";
import { Outlet } from "react-router-dom";


import MyHeader from './Component/MyHeader'
import MyFooter from './Component/Footer'

export default function ClassTest() {
  return (
    <div>
      <MyHeader />
      <Outlet />
      <MyFooter />
    </div>
  );
}