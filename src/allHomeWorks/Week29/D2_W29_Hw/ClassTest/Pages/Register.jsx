import axios, { all } from 'axios';
import React from 'react'

async function registerUser(data) {
    try{
        const res = axios.post("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections",data);
        return res;
    }
    catch(error){
        if(error.message){
            console.error(error.message);
        }
    }
}

function getAllUsers() {
    try{
        const res = axios.get("https://67ddabf7471aaaa7428230f7.mockapi.io/MyProject/Projections");
        return res;
    }catch(error){
        if(error.message){
            console.error(error.message);
        }
    }
}

export default function Register() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        const data = {
            Name: name,
            Email: email,
            Phone: phone,
            Username: userName,
            Password: password
        }
        const res = await registerUser(data);
        if(res.status === 200 || res.status === 201){
            alert("User registered successfully");
            setName('');
            setEmail('');
            setPhone('');
            setUserName('');
            setPassword('');
            setConfirmPassword('');
            const allUsers = await getAllUsers();
            const alluserShower = document.getElementById("all-user");
            alluserShower.innerHTML = "";
            allUsers.data.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.innerHTML = `<h1>ID:${user.id}</h1> Name: ${user.Name}<br>Email: ${user.Email}<br>Phone: ${user.Phone}<br>Username: ${user.Username}<br>`;
                alluserShower.appendChild(userDiv);
            });
        }
        else{
            alert("Error while registering user");
        }
    }

  return (
    <div>
      <form onSubmit={async(e)=>{handleSubmit(e)}}>
        <div className="box">
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="box">
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="box">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="box">
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="box">
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="box">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id='confirm-password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <div id="all-user">

      </div>
    </div>
  )
}
