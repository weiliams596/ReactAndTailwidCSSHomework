import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();
    const handleGoToProjects = () => {
        navigate('/HW9/project');
    };
  return (
    <div>
        <h1>Profile</h1>
        <p>This is the profile page</p>
        <p>Welcome to my profile page</p>
        <p>My Name is <mark>MaHaoYa</mark></p>
        <p>My Email: mhy596520@gmail.com</p>
        <p>My School: Amjilt Syber School</p>
        <button onClick={handleGoToProjects}>Go to Projects</button>
    </div>
  )
}
