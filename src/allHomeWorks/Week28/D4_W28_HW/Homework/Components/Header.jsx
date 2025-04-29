import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
        <Link to="/HW10/home">Home</Link>
        <Link to="/HW10/project">Projects</Link>
        <Link to="/HW10/about">About Me</Link>
    </header>
  )
}
