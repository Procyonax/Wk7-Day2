import React from "react";

const Film = ({ film }) => {
  return (
    <div className="FilmBox">
      <ul>
      <a key={`${film.id}`} href={`${film.url}`}>{film.name}</a>
      </ul>
    </div>
  );
};

export default Film;
