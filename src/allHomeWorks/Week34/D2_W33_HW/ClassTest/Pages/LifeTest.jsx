import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LifeTest() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const fetchData = async ()=>{
        try{
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        }catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      {loading && <p>Loading...</p>}
      <p className='text-red-500'>{error}</p>
      {data.map((item,index)=>(
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  )
}
