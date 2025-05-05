import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GeMini = new GoogleGenerativeAI(
  import.meta.env.VITE_GOOGLE_GEMINI_API_KEY
);

export default function ImageAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {}, [response]);

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
        model: "models/gemini-2.0-flash",
      });
      const result = await model.generateContent(
        `Please give me ${prompt} image`
      );
      const geminiResponse = await result.response;
      console.log(geminiResponse);
      if (
        (await geminiResponse.candidates[0].content.parts[0].finishReason) !=
        "STOP"
      ) {
        setResponse({
          data: await geminiResponse.candidates[0].content.parts[0].text,
          mimeType: await geminiResponse.inlineData.mimeType,
        });
      } else {
        setResponse({
          data: null,
          mimeType: null,
          error: geminiResponse.candidates[0].content.parts[0].text,
        });
      }
      console.log(response);
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Gemini Image AI Chat</h1>
      <div className="flex flex-row justify-center items-center w-full">
        <textarea
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          className=" border-1 rounded-[10px] w-[20%]"
        />
        <button className="bg-blue" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {response && (
        <div>
          <img
            src={`data:image/png;${response.mimeType},${response.data}`}
            alt="response"
          />
          <p style={{ color: "red" }}>{response.error}</p>
        </div>
      )}
    </div>
  );
}
