import React from "react";

import { useNavigate } from "react-router-dom";

export default function MovieCard(props) {
  const nav = useNavigate();

  const handleMovieCardClick = (movie) => {
    props.onClick();
    nav(`/CT14/Details/${movie.imdbID}`);
  };

  return (
    <div
      className="movie-card"
      onClick={(e) => {
        handleMovieCardClick(props.data);
      }}>
      <img
        src={
          props.data.Poster === "N/A"
            ? "https://via.placeholder.com/200x300"
            : props.data.Poster
        }
        alt={props.data.title}
      />
      <div className="info-container">
        <h2>{props.data.Title}</h2>
        <p>{props.data.Type === "movie" ? "film" : "series"}</p>
        <p>{props.data.Year}</p>
      </div>
    </div>
  );
}
