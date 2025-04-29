import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

import Header from './Components/Header'

import {CheckServerHaveUser} from './Assets/UserInfoConfig';

export default function Homework() {
  const [isAuthLoggedIn, setIsAuthLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem('userState');
    if (token==='loggedIn') {
      setIsAuthLoggedIn(true);
      navigate('/HW10/home');
    }
    else {
      navigate('/HW10/register');
    }

    async ()=>{
      try {
        const haveUser = await CheckServerHaveUser();
        if (haveUser) {
          setIsAuthLoggedIn(true);
          navigate('/HW10/home');
        }
        else {
          navigate('/HW10/register');
        }
      } catch (error) {
        console.error(error);
      }
    }


  }, []);
  return (
    <div>
      {isAuthLoggedIn && <Header />}
      <Outlet props={{ isAuthLoggedIn, setIsAuthLoggedIn }} />
    </div>
  )
}
