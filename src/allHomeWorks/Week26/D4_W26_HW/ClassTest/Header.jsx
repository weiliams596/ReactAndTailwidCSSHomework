import React from "react";


export default function Header(){
    return (
        <header className="header">
            <h1>My blog</h1>
            <p>I want to learn new tecknologies and share my knowledge with others.</p>
            <div className="link-list">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </header>
    );
}