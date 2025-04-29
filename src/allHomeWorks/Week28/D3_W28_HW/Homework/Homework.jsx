import React from 'react';
import {Outlet} from "react-router-dom";

import Header from './Components/Header'

export default function Homework() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}