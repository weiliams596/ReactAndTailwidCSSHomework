import React, { useEffect, useState } from 'react';


const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function ValidateInput() {
    const [email,setEmail] = useState('');
    const [isValid,setIsValid] = useState(null);

    useEffect(()=>{
        if(!email) {setIsValid(null);return;}
        setIsValid(regexEmail.test(email));
        console.log(isValid);
    },[email]);

  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      {isValid!==null &&  (isValid ?<p>Input is valid</p>:<p>Input is invalid</p>)}
    </div>
  )
}
