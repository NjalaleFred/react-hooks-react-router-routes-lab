import React from "react";
import { movies } from "../data";

function Movies() {
  const myMovies = movies.map((movie)=>{
    return(
      <div key={movie.title}>
        <h2>Title: {movie.title}</h2>
        <h3>Time: {movie.time} min</h3>
        <>
        <h4>Genres:</h4>
          {movie.genres.map((genre, index) =>{
            return (
            <ul key={index}>
              <li>{genre}</li>
              </ul>)
          })}
        </>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {myMovies}
  </div>
  );
}

export default Movies;
