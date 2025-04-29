import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

import {InsertUser} from '../config/Register.config.js';

export default function Register() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [userName,setUserName] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [error,setError] = useState('');
  
  const navigate = useNavigate();

  const validateName = /^[a-zA-ZА-Яа-я]+$/;
  //const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateUserName = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/;

  useEffect(()=>{
    if(password!== confirmPassword){
      setError('Passwords do not match');
    }
  },[password,confirmPassword]);

  useEffect(()=>{
    if(!validateName.test(name)){
      setError('Name should contain only letters');
    }
  },[name]);

  // useEffect(()=>{
  //   if(!validateEmail.test(email)){
  //   }
  // },[email]);

  useEffect(()=>{
    if(!validateUserName.test(userName)){
      setError('User Name should contain only letters and \"\'\" or \"-\" ');
    }
  },[userName]);

  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        setError('');
      },3000);
    }
  },[error]);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(error.length){
      return;
    }
    try{
      const response = await InsertUser({name,email,userName,password});
      navigate('/HW12');
    }catch(error){
      console.error(error);
      setError(error.message);
    }
  }

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn==='true'){
      navigate('/HW12');
    }
    
  },[]);
  return (
    <div>
      <h1>Register page</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} required />
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <label htmlFor="userName">User Name:</label>
        <input type='text' id='userName' name='userName' value={userName} onChange={(e)=>setUserName(e.target.value)} required />
        <label htmlFor="phone">Phone:</label>
        <input type='text' id='phone' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} required />
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input type='password' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required />
        <p style={{color:'red'}}>{error}</p>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
