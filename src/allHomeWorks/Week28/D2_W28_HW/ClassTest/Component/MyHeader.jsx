import React from 'react'

import { Link } from 'react-router-dom'

export default function MyHeader() {
  return (
    <header>
        <nav><Link to={'/CT8'}>Home</Link></nav>
        <nav><Link to={'/CT8/Contact'}>Contact</Link></nav>
    </header>
  )
}
