import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { LoginUser, LoginUserByUserName, CheckServerHaveUser } from '../Assets/UserInfoConfig';

const loggedIn = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let callFunction = LoginUser;
    try {
        if (username.includes('@')) {
            callFunction = LoginUserByUserName;
        }
        const user = await callFunction(username, password);
        if (user) {
            props.setIsAuthLoggedIn(true);
            navigate('/HW10/home');
        }
    } catch (error) {
        document.getElementById('error').innerHTML = error.message;
        setTimeout(() => {
            document.getElementById('error').innerHTML = '';
        }, 1500);
    }
}

export default function Login(props) {
    const navigate = useNavigate();
    useEffect(() => {
        async () => {
            const retValue = await CheckServerHaveUser();
            console.log(retValue);
            if (!retValue) {
                document.getElementById('error').innerHTML = 'No user found. Please register first.';
                setTimeout(() => {
                    document.getElementById('error').innerHTML = '';
                    navigate('/HW10/register');
                }, 1500);
            }
        }
        if (props.isLoggedIn) {
            navigate('/HW10/home');
        }
    }, []);

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={loggedIn}>
                <label>Username or Email:</label>
                <input type="text" name="username" id='username' placeholder='Enter Username or Email' />
                <br />
                <label>Password:</label>
                <input type="password" name="password" id='password' placeholder='Enter Password'/>
                <br />
                <p id='error'></p>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
