import React from "react";

const Movies = (props) => {
  function addNom() {
    console.log(props.nominees);
    if (props.nominees.length === 0) {
      props.setNominees((curr) => [...curr, props.movie.Title]);
    } else if (props.nominees.length < 5) {
      if (props.nominees.includes(props.movie.Title) === false) {
        return props.setNominees((curr) => [...curr, props.movie.Title]);
      }
    } else if (props.nominees.length === 5) {
      props.togglePopup();
    }
  }
  return (
    <li key={props.movie.imdbID}>
      {props.movie.Title}({props.movie.Year})
      <button
        key={props.movie.Title}
        className={props.movie.imdbID}
        onClick={(e) => {
          e.preventDefault();
          addNom();
        }}
      >
        Nominate
      </button>
    </li>
  );
};

export default Movies;
