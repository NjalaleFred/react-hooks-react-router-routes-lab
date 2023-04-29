import React from "react";
import { directors } from "../data";

function Directors() {
  const theDirectors = directors.map((director,index)=>{
    return(
      <div key={index}>
        <h2>{director.name} </h2>
        <>
        <h4>Movies:</h4>
        {director.movies.map((movie,index)=>{
          return(
          <ul key={index}>
            <li>{movie}</li>
            </ul>)
        })}
        </>
      </div>   
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {theDirectors}
  </div>
  )}

export default Directors;
