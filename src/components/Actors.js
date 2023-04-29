import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h2>{actor.name}</h2>
        <>
          <h4>Movies:</h4>
          {actor.movies.map((movie, index) => {
            return (
              <ul key={index}>
                <li>{movie}</li>
              </ul>
            );
          })}
        </>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      <section>{allActors}</section>
    </div>
  );
}

export default Actors;
