import React, { useState,useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeMini = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
);


export default function ImageAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [tranlateFor, setTranlateFor] = useState("kk");

  useEffect(() => {

  }, [response]);

  useEffect(() => {
    const history1 = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(history1);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    try {
      setLoading(true);
      setResponse("");
      const model = GeMini.getGenerativeModel({
        model: "gemini-2.0-flash-exp-image-generation",
      });
      const result = await model.generateContent(
        `Please give me ${prompt} image`
      );
      const geminiResponse = await result.response;
      setResponse({data:await geminiResponse.inlineData().data(),mimeType:await geminiResponse.mimeType()});

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
        <select
          name="translateFor"
          id="translateFor"
          onChange={(e) => setTranlateFor(e.target.value)}
          value={tranlateFor}>
          <option value="kk">Kazakh</option>
          <option value="ru">Russian</option>
          <option value="en">English</option>
        </select>
        <button className="bg-blue" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        <img src={`data:image/png;${response.mimeType},${response.data}`} alt="response" />
      </div>
    </div>
  );
}
