import React, { useEffect, useState } from 'react';
import useFilter from '../Components/useFilter';
import axios from 'axios';

export default function SearchBooks() {
    const [books,setBooks] = useState([]);
    const{ setSearcher, filterOrders} = useFilter(books,'title');
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books');
                if(response.status ===200 || response.status === 201){
                    console.log(response.data);
                    setBooks(response.data);
                }
                
            }catch(error){
                console.error(error);
            }
        };
        fetchData();
    },[]);
  return (
    <div>
      <h1>Search Books</h1>
      <div className="searcher">
        <input type="search" onChange={(e)=>setSearcher(e.target.value)} placeholder="Search by title or author" />
        <button onClick={()=>console.log(search)}>Search</button>
      </div>
      <div className="list">
        {filterOrders && filterOrders.map((book,index)=>(
          <div key={index} className="book">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
            <p>{book.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
