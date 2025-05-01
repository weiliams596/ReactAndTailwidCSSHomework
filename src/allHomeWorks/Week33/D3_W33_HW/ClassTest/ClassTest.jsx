import React, { useEffect, useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
);

export default function ClassTest() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(history.push(prompt));
    return () => {
      localStorage.setItem('history', JSON.stringify(history));
    };
  }, [response]);

  useEffect(()=>{
    const history = JSON.parse(localStorage.getItem('history')) || [];
    setHistory(history);
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    try {
      setLoading(true);
      setResponse("");
      const model = generativeAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      setResponse(await geminiResponse.text());
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Gemini AI Chat</h1>
      <div className="flex flex-row justify-center items-center w-full">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className=" border-1 rounded-[10px] w-[20%]"
        />
        <button className="bg-blue" onClick={handleSubmit}>
          Ask for gemini
        </button>
      </div>
      <div>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          history.length > 0 &&
          history.map((item, index) => <p key={index}>{item}</p>)
        )}
      </div>
    </div>
  );
}
