import React, { useEffect, useState } from "react";

import axios from "axios";

export default function useAxios(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    async function fetchData(){
        try{
            const response = await axios.get(url);
            if(response.status === 200||response.status === 201){
                setData(response.data);
                setError("");
            }
        }
        catch(error){
            setError(error.message);
        }
    }
    fetchData();
  },[url]);
  return { data, error };
}
