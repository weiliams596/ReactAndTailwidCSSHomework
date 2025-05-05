import React, { useEffect, useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import ImageAI from "./Pages/ImageAI";

const generativeAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
);

const translateType = (type) => {
  if (type === "kk") {
    return "\nTranslated to Kazakh:\n";
  } else if (type === "ru") {
    return "\nTranslated to Russian:\n";
  } else {
    return "\nTranslated to English:\n";
  }
};

export default function ClassTest() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [tranlateFor, setTranlateFor] = useState("kk");

  useEffect(() => {
    if (!response.trim()) return;
    localStorage.setItem("history", JSON.stringify(history));
    setPrompt("");
    return () => {
      localStorage.setItem("history", JSON.stringify(history));
    };
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
      // const model = generativeAI.getGenerativeModel({
      //   model: "gemini-1.5-flash",
      // });
      // const result = await model.generateContent(
      //   "Give me only translated text: " + prompt + translateType(tranlateFor)
      // );
      // const geminiResponse = await result.response;
      // setResponse(await geminiResponse.text());

      // const obj = { user: prompt, bot: await geminiResponse.text() };
      // setHistory([...history, obj]);
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
        <h1>Historys:</h1>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          history.length > 0 &&
          history.map((item, index) => (
            <div key={index * 2}>
              <p>User:{item.user + "\n"}</p>
              <p>Gmini:{item.bot}</p>
            </div>
          ))
        )}
      </div>
      <ImageAI/>
    </div>
  );
}
