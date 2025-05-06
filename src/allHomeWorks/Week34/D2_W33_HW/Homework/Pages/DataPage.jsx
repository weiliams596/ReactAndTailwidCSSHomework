import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1&#39"
      );
      if (response.status === 200 || response.status === 201) {
        setData(response.data);
      }
    } catch (err) {
        console.error(err.message);
      setError("Қате");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchData();
    }, 5000);
    return () => {
        clearInterval(timer);
    };
  }, []);
  return (
    <div>
      {loading && <p>Жүктелуде…</p>}
      <p className="text-red-500">{error}</p>
      {data && (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
