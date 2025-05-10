import React, { useEffect, useState } from 'react';


const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const regexpPassword = /^[^\s@]{6,}$/;
export default function ValidateInput() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    if(!email && !password){
      setIsValid(null);
      return;
    }
    setIsValid(regexpEmail.test(email));
    setIsValid(regexpPassword.test(password));
    console.log(password);
    console.log(isValid);
  }, [email, password]);

  useEffect(() => {
    const timer = setInterval(() => {

    }, 5000);
    return () => {
      clearInterval(timer);
    }
  }, []);
  return (
    <div className='flex flex-col w-[300px] bg-blue-400 p-4 rounded-2xl'>
      <label htmlFor="email">Email:</label>
      <input className='rounded-md p-2 border-2 border-gray-300 focus:outline-0' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input className='rounded-md p-2 border-2 border-gray-300 focus:outline-0' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {isValid !== null && (isValid ? <p className='text-green-400'>Input is valid</p> : <p className='text-red-500'>Input is invalid</p>)}
    </div>
  )
}
