import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={"/HW12"}>Home</Link>
      <Link to={"/HW12/register"}>Register</Link>
      <Link to={'/HW12/login'}>Login</Link>
    </header>
  );
}
