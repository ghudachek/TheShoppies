import React from "react";

const Movies = (props) => {
  function addNom() {
    if (props.nominees.length === 0) {
      props.setNominees((curr) => [...curr, props.movie.Title]);
    } else if (props.nominees.length < 5) {
      if (props.nominees.includes(props.movie.Title) === false) {
        props.setNominees((curr) => [...curr, props.movie.Title]);
      }
    } else if (props.nominees.length === 5) {
      props.togglePopup();
    }
  }
  return (
    <div className="movies-opt" key={props.movie.imdbID}>
      <img className="posters" src={props.movie.Poster} />
      {props.movie.Title}({props.movie.Year})
      <button
        key={props.movie.Title}
        className="nominate-btn"
        id={props.movie.imdbID}
        onClick={(e) => {
          e.preventDefault();
          addNom();
        }}
      >
        Nominate
      </button>
    </div>
  );
};

export default Movies;
