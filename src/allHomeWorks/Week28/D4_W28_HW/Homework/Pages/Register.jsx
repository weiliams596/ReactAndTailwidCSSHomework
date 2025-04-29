import React, { useEffect } from 'react'

import {InsertNewUser} from '../Assets/UserInfoConfig';

async function submitForm(e){
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    const response = await InsertNewUser(username, password, email);
    if(response.ok){
        alert("User registered successfully");
        window.location.href = "/login";
    }else{
        alert("Error registering user");
    }
}


export default function Register() {
  useEffect(()=>{
  },[]);
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
