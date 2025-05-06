import React,{useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

export default function ClassTest() {
    
  return (
    <div>
        <Header />
        <h1 className='text-center text-xs'>Басты бет</h1>
        <Outlet />
    </div>
  )
}
