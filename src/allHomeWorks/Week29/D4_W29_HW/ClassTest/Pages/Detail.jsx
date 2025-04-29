import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'https://www.omdbapi.com/?apikey=17dec6d0&plot=full';

export default function Detail() {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    
    useEffect(()=>{
      async function fetchData() {
        try{
          const response = await axios.get(`${apiUrl}&i=${id}`);
          console.log(response);
          setMovieDetail(response.data);
        }catch(error){
          console.error(error);
        }
      }
      fetchData();
    },[]);
  return (
    <div className='detail'>      
      {movieDetail && (
        <div className='detail-container'>
          <h1>{movieDetail.Title}</h1>
          <p>{movieDetail.Plot}</p>
          <img src={movieDetail.Poster} alt={movieDetail.Title} />
        </div>
      )}
    </div>
  )
}
