import React from "react";
import Film from "./Film";

const FilmList = ({ films }) => {
  const filmNodes = films.map((film) => {
    return <Film key={film.id} film={film} />;
  });

  return (
    <>
      {/* <p>&gt;:D</p> */}
      <ul>{filmNodes}</ul>
    </>
  );
};

export default FilmList;
