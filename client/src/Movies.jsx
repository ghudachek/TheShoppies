import React from "react";
import { useState, useEffect } from "react";
import Popup from "./Popup";

const Movies = (props) => {
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    setChosen(false);
  }, [props.movieArr]);

  function addNom() {
    console.log(props.nominees);
    if (props.nominees.length === 0) {
      props.setNominees((curr) => [...curr, props.movie.Title]);
    } else if (props.nominees.length < 5) {
      if (props.nominees.includes(props.movie.Title) === false) {
        return props.setNominees((curr) => [...curr, props.movie.Title]);
      }
    } else if (props.nominees.length === 5) {
      console.log("you  made it to five");
      props.togglePopup();
    } else {
      setChosen(true);
    }
  }
  return (
    <li className={props.movie.imdbID} key={props.movie.imdbID}>
      {props.movie.Title}({props.movie.Year})
      <button
        key={props.movie.Title}
        disabled={chosen}
        onClick={(e) => {
          e.preventDefault();
          addNom();
          setChosen(true);
        }}
      >
        Nominate
      </button>
    </li>
  );
};

export default Movies;
