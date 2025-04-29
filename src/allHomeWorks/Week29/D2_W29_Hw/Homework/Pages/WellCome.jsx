import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetAllUser} from '../config/Register.config.js';

export default function WellCome() {
  const [name, setName] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    navigate('/HW12/login');
  };

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn==='true') {
      navigate('/HW12/register');
      return null;
    }
    setName(localStorage.getItem('userName'));
    const getAllUsers= async ()=>{
      setAllUsers(await GetAllUser());
    }
    getAllUsers();
  },[]);

  useEffect(()=>{
    console.log(allUsers);
  },[allUsers]);

  return (
    <div>
      <h1>Welcome to our website!</h1>
      <h3>Your name is :{name}</h3>
      <p>We hope you will enjoy our services.</p>
      <button onClick={(e)=> {handleLogout(e)}}>Logout</button>
      <div className="users-list">
        {allUsers.length > 0 && allUsers.map((user, index) => (
          <div className="userCard" key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
