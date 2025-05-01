import React, { useEffect, useState } from "react";

import OpenAI from "openai";

const openAI = new OpenAI({apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY, dangerouslyAllowBrowser: true});

export default function Homework() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const comp = await openAI.responses.create({
        model: "gpt-3.5-turbo",
        input: prompt,
      });
      setResponse(comp.choices[0].text);
      setHistory([...history, comp.choices[0].text]);
      setPrompt("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>You can ask me anything: (I do not have a bill for use of AI)</label>
        <input
        className="border-2 rounded-[20px] pl-[20px]"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">{loading ? "Loading..." : "Ask"}</button>
        <p>It can work all-right but I don't have a bill for use of AI.</p>
      </form>
      <div>
        {history.length > 0 &&
          history.map((item, index) => <p key={index}>Chat bot {index}: - {item}</p>)}
      </div>
    </div>
  );
}
