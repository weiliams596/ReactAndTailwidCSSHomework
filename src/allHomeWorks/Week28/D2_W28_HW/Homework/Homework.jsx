import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Header from './Components/Header'

export default function Homework() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/HW9/home');
    }, []);

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/HW9/home') {
            document.title = 'Homework 9';
        } else if (path === '/HW9/profile') {
            document.title = 'Profile';
        } else if (path === '/HW9/project') {
            document.title = 'Project';
        } else if (path === '/HW9/about-me') {
            document.title = 'About Me';
        }
    }, [window.location.pathname]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

