import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        <Link to="/HW9/home">Home</Link>
        <Link to="/HW9/project">Projects</Link>
        <Link to="/HW9/about">About Me</Link>
    </header>
  )
}
