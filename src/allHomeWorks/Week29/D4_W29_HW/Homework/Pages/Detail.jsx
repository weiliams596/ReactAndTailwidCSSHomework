import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=17dec6d0&plot=full";

export default function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiUrl}&i=${id}`);
        setMovieDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(movieDetail);
  }, [movieDetail]);
  return (
    <div className="detail">
      {movieDetail && (
        <div className="detail-container">
          <h1>{movieDetail.Title}</h1>
          <div className="detail-image">
            <p>{movieDetail.Plot}</p>
            <img src={movieDetail.Poster} alt={movieDetail.Title} />
          </div>
          <div className="three-div">
            <div className="ratings">
              {movieDetail.Ratings &&
                movieDetail.Ratings.map((rating,index) => (
                  <div key={index} className="ratings-list">
                    <div className="left">{rating.Source}:</div>
                    <div className="right">{rating.Value}</div>
                  </div>
                ))}
            </div>
            <div className="AABI-div">
              <p>Actor: {movieDetail.Actors};</p>
              <p>Awards: {movieDetail.Awards};</p>
              <p>Box office: {movieDetail.BoxOffice};</p>
              <p>IMDB: {movieDetail.imdbRating};</p>
            </div>
            <div className="lang">
              <p>Language:</p>
              {movieDetail.Language && movieDetail.Language.split(",").map((lang,index) => (
                <div key={index} className="lang-list">
                  {lang}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
