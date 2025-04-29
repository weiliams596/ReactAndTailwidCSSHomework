import React from 'react'
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/HW9/profile");
    }
  return (
    <div>
        <h1>About Me:</h1>
        <ul><p>My all skills:</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MSSQL</li>
            <li>MySql</li>
            <li>PostgraSql</li>
            <li>CSharp</li>
            <li>C++</li>
            <li>GLSL</li>
            <li>HLSL</li>            
        </ul>
        <button onClick={handleClick}>Go to My Profile</button>
    </div>
  )
}
