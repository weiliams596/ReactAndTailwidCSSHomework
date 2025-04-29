import React, { useEffect, useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function Homework() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [appraise, setAppraise] = useState("1");
  const [isFeedBackShow, setIsFeedBackShow] = useState(false);
  const [lowAppraise, setLowAppraise] = useState('');
  
  const [error,setError] = useState("");

  const invalidNameRexg = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘәáńǵóúÁŃǴÓÚ\s'-]+$/;

  const retStar = (num) => {
    let ret = [];
    for (let i = 0; i < num; i++) {
      ret.push("⭐");
    }
    if (num === 1) {
      ret.push(" Толімсіз");
    }
    if (num === 3) {
      ret.push(" Ортақал");
    }
    if (num === 5) {
      ret.push(" Қатті ыразы");
    }
    return ret;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(error.length){
      return;
    }
    setEmail("");
    setFeedback("");
    setAppraise("5");
    setIsFeedBackShow(false);
    setLowAppraise("");
    alert("Рахмет, сіздің пікіріңіз маңызды!");
  };

  useEffect(()=>{
    if(name.length<2){
      setError("Аты-жөніңіз 2 орыннан азболуға болмайды!");
    }
    if(!invalidNameRexg.test(name)){
      setError("Аты-жөніңіз еңгізуіңіз толымсыз!");
    }
  },[name]);
  useEffect(()=>{
    setError('');
    if(email.length<5){
      setError("Электрондық пошта-адрессіңіз 5 орыннан азболуға болмайды!");
    }
    if(!email.includes("@") || !email.includes(".")){
      setError("Электрондық пошта-адрессіңіз еңгізуіңіз толымсыз!");
    }
  },[email]);
  useEffect(()=>{
    setIsFeedBackShow(appraise<3);
  },[appraise]);

  useEffect(()=>{
    setError('');
    if(isFeedBackShow){
      if(lowAppraise.length<10){
        setError("10 орыннан азболуға болмайды!");
      }
    }
  },[lowAppraise]);

  return (
    <div>
      <h1>Кері байланыс Формасы</h1>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label htmlFor="name">Аты-жөні:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="email">Электрондық пошта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="box">
          <label htmlFor="feedback">Пікіріңіз:</label>
          <textarea
            id="feedback"
            rows={5}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required></textarea>
        </div>
        <div className="box">
          <label htmlFor="appraise">Бағаңызды қойыңыз:</label>
          <select
            name="appraise"
            id="appraise"
            value={appraise}
            onChange={(e) => setAppraise(e.target.value)}>
            <option value="1">
              {retStar(1).map((item) => {
                return item;
              })}
            </option>
            <option value="2">
              {retStar(2).map((item) => {
                return item;
              })}
            </option>
            <option value="3">
              {retStar(3).map((item) => {
                return item;
              })}
            </option>
            <option value="4">
              {retStar(4).map((item) => {
                return item;
              })}
            </option>
            <option value="5">
              {retStar(5).map((item) => {
                return item;
              })}
            </option>
          </select>
        </div>
        {isFeedBackShow && <div className="box">
          <label htmlFor="whyLowAppraise">Төмен бағалау себеуы:</label>
          <textarea name="whyLowAppraise" id="lowApprise" value={lowAppraise} rows={5} onChange={(e) => setLowAppraise(e.target.value)}></textarea>
        </div>}
        <button type="submit">Бағалау</button>
        <p id="error">{error}</p>
      </form>
    </div>
  );
}
