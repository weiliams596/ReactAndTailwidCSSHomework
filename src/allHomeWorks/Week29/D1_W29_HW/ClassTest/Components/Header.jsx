import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to={'/CT11/login'}>Login</Link>
      <Link to={'/CT11/register'}>Register</Link>
    </header>
  )
}
