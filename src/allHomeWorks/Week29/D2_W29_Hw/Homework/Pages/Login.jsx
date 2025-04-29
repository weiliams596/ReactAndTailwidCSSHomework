import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginByEmail } from "../config/Login.config.js";
import { GetAllUser } from "../config/Register.config.js";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const isHaveUsers = async () => {
      const allUsers = await GetAllUser();
      if (!allUsers) {
        navigate("/HW12/register");
      }
    };
    isHaveUsers();
  }, []);

  useEffect(()=>{
    if(localStorage.getItem('isLoggedIn')==='true'){
      navigate('/HW12');
    }
  },[location]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await LoginByEmail(email, password);
    if (response === true) {
      navigate("/HW12");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
