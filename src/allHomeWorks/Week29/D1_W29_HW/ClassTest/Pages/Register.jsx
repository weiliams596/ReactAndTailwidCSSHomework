import React, { useEffect, useState } from 'react'


export default function Register() {
    const [name, setName] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const invalidNameRxg = /^[a-zA-ZáńǵóúÁŃǴÓÚа-яёәғқңөұүһіА-ЯЁӘҒҚҢӨҰҮҺІ\s'-]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!error.length){
            return;
        }
        console.log(name, email, password, confirmPassword);
        alert('Registration successful');
    }


    useEffect(() => {
        if(password !== confirmPassword){
            setError('Passwords do not match');
        }else{
            setError('');
        }
    }, [password, confirmPassword]);

    useEffect(() => {
        if(name.length < 3){
            setError('Name should be at least 3 characters long');
        }
        else if(!invalidNameRxg.test(name)){
            setError('Invalid name');
        }
        else{
            setError('');
        }
    },[name]);

    useEffect(()=>{
        if(email.length < 5){
            setError('Email should be at least 5 characters long');
        }else if(!email.includes('@')){
            setError('Your email is not valid,chack it again');
        }
        else{
            setError('');
        }
    },[email]);
  return (
    <div>
      <h1>Regitster Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="info-box">
            <label htmlFor="name">Аты-жөні:</label>
        <input type="text" id="name" name="name" required  onChange={(e) => setName(e.target.value)}/>
            </div>        
            <div className="info-box">
                <label htmlFor="Email">Email:</label>
                <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="info-box">
                <label htmlFor="password">Құпия сөз:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="info-box">
                <label htmlFor="confirm-password">Құпия сөзді өзгерту:</label>
                <input type="password" id="confirm-password" name="confirm-password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <p id='error'>{error}</p>
            <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}
