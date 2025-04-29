import React, { useEffect, useState } from "react";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const invalidInput = /^[a-zA-ZáńǵóúÁŃǴÓÚа-яёәғқңөұүһіА-ЯЁӘҒҚҢӨҰҮҺІ\s'-]+$/


  const handleSubmit = (e) => {
    e.preventDefault();
    if(error.length){
      return
    }
    const info = { email, password };
    console.log(`You entered: ${info}`);
    setEmail("");
    setPassword("");
    alert("Login Successfull");
  };

  useEffect(() => {
    if (!email.includes("@")) {
      setError("Email should be valid");
    } else if (!email.length < 3) {
      setError("Email should be at least 3 characters long");
    } else {
      setError("");
    }
  }, [email]);

  useEffect(() => {
    if (password.length < 8) {
      setError("Password should be at least 8 characters long");
    } else {
      setError("");
    }
  }, [password]);

  useEffect(()=>{
    if(name.length<3){
      setError("Name should be at least 3 characters long");
    }else{
      setError("");
    }
  },[name]);
  return (
    <div>
      <h1>Кыру</h1>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="name">Аты:</label>
          <input type="text" id="name" name="name" placeholder="Аты" required />
        </div>
        <div className="box">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="password">Құпия сөз:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p id="error">{error}</p>
        <button type="submit">Кіру</button>
      </form>
    </div>
  );
}
