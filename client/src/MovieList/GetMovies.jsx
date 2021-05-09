import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NomineeList from "../NomineeList/NomineeList";
import Movies from "../Movies/Movies";
import Form from "../SendForm/Form";
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

  //Load Stored Nominations if any
  function CheckStorage() {
    if (localStorage.getItem("nominees").length !== 0) {
      let stored = localStorage.getItem("nominees");
      setNominees(stored.split(","));
    }
  }
  useEffect(() => {
    CheckStorage();
  }, []);

  //Check for disabling buttons
  useEffect(() => {
    localStorage.setItem("nominees", nominees);

    movieArr?.map((movie) => {
      if (nominees.includes(movie.Title) === false) {
        return (document.querySelector(`#${movie.imdbID}`).disabled = false);
      } else {
        return (document.querySelector(`#${movie.imdbID}`).disabled = true);
      }
    });
  }, [nominees, setNominees, setMovieArr, movieArr]);

  return (
    <>
      <form
        className="search-section"
        onSubmit={(e) => {
          e.preventDefault();
          getMovies(document.querySelector(".input"));
          setInput(document.querySelector(".input"));
        }}
      >
        <label className="label-search" htmlFor="input">
          <b> Movie Title</b>
        </label>
        <br />
        <input type="text" className="input" placeholder="search" />

        <button className="search">
          <i className="fas fa-search"> </i> <b>Search</b>
        </button>
      </form>
      <section className="box">
        <div className="movie-list">
          <h2>Results for "{input ? input.value : "..."}"</h2>
          <div className="movies">
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
          </div>
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
          <h2>Nominations</h2>
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
