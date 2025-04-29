import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleOnclick = () => {
        navigate('/HW10/project')
    }

    return (
        <div>
            <h1>Well come to my Home page</h1>
            <button onClick={handleOnclick}>Click me to go to Projects page</button>
        </div>
    )
}
