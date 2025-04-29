import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/CT16");
    }, 1000);
  };
  return (
    <div>
      <h1>Well come to Home Page</h1>
      <p>You can click on the button to log out.</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
