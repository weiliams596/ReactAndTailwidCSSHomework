import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/HW9/about');
    }
  return (
    <div>
        <h1>All my Projects:</h1>
        <ul><p>Porjects list:</p>
            <li>Jumus bazar</li>
            <li>Online school</li>
            <li>JayEngine</li>
        </ul>
        <button onClick={handleClick}>Go to About Me</button>
    </div>
  )
}
