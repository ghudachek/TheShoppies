import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NomineeList from "../NomineeList/NomineeList";
import Movies from "../Movies";
import Form from "../services/Form";
import Popup from "../Popup";

const GetMovies = () => {
  const DOMAIN = `https://www.omdbapi.com/`;
  const API_KEY = "e75418f0";
  const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
  const [movieArr, setMovieArr] = useState([]);
  const [input, setInput] = useState();
  const [nominees, setNominees] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  //GET Movies
  async function getMovies(input) {
    try {
      const resp = await axios.get(`${BASE_URL}s=${input.value}`);
      setMovieArr(resp.data.Search);
    } catch (err) {
      console.error(err);
    }
  }

  //Check for disabling buttons
  useEffect(() => {
    localStorage.setItem("nominees", nominees);

    movieArr?.map((movie) => {
      if (nominees.includes(movie.Title) === false) {
        document.querySelector(`.${movie.imdbID}`).disabled = false;
      } else {
        document.querySelector(`.${movie.imdbID}`).disabled = true;
      }
    });
  }, [nominees, setNominees, setMovieArr, movieArr]);

  return (
    <>
      <div className="search-section">
        <label className="label-search" htmlFor="input">
          Movie title
        </label>
        <br />
        <input type="text" className="input" placeholder="search" />

        <button
          className="search"
          onClick={(e) => {
            e.preventDefault();
            getMovies(document.querySelector(".input"));
            setInput(document.querySelector(".input"));
          }}
        >
          <i className="fas fa-search"> </i> Search
        </button>
      </div>
      <section className="box">
        <div className="movie-list">
          <h2>Results for "{input ? input.value : "..."}"</h2>
          <ul className="movies">
            {movieArr?.map((movie, index) => {
              return (
                <Movies
                  movie={movie}
                  index={index}
                  setNominees={setNominees}
                  nominees={nominees}
                  movieArr={movieArr}
                  setMovieArr={setMovieArr}
                  togglePopup={togglePopup}
                />
              );
            })}
          </ul>
        </div>
        <div>
          {isOpen && (
            <Popup
              content={
                <>
                  <b>You've reached your limit of 5 nominations!</b>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
        <div className="nominee-list">
          <h1>Nominations</h1>
          <ul className="nominees">
            <NomineeList nominees={nominees} setNominees={setNominees} />
          </ul>
          <Form nominees={nominees} />
        </div>
      </section>
    </>
  );
};

export default GetMovies;
