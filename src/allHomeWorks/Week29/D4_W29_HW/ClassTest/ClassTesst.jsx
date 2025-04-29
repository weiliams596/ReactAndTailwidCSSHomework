import React, { useEffect, useState } from 'react'
import Searcher from './Components/Searcher';
import {Outlet, useNavigate}from 'react-router-dom';
import axios from 'axios';
import MovieCard from './Components/MovieCard';



const apiUrl = 'https://www.omdbapi.com/?apikey=17dec6d0';


export default function ClassTesst() {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isShowSearchList,setShowSearchList] = useState(false);

    useEffect(()=>{
        if(isSearching){
            async function fetchData(){
                try{
                    const resp = await axios.get(`${apiUrl}&s=${searchText}`);
                    console.log(resp.data);
                    setMovieList([...resp.data.Search]);
                    setShowSearchList(true);

                }catch(error){
                    setShowSearchList(false);
                    console.error(error);
                }
            }
            fetchData();
        }
    },[isSearching]);
  return (
    <div className='container'>
      <Searcher setIsSearching={setIsSearching} setSearchText={setSearchText} setShowSearchList={setShowSearchList}/>
      <div className="movie-list">
      {isShowSearchList && movieList.map((movie, index) => {
          return <MovieCard key={index} data={movie} onClick={(e)=>{setShowSearchList(false)}}/>
      })}
      </div>
      <Outlet />
    </div>
  )
}
