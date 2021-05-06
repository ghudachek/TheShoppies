import React from "react";
import axios from "axios";
import { useState } from "react";

const GetMovies = () => {
  const DOMAIN = `https://www.omdbapi.com/`;
  const API_KEY = "e75418f0";
  const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
  const [movieArr, setMovieArr] = useState([]);
  const [input, setInput] = useState();

  async function getMovies(input) {
    try {
      const resp = await axios.get(`${BASE_URL}s=${input.value}`);
      console.log(resp.data.Search);
      setMovieArr(resp.data.Search);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="search-section">
        <label htmlFor="input">Movie Title</label>
        <input
          type="text"
          id="blank"
          className="input"
          placeholder="Movie Title"
        />
        <button
          className="search"
          onClick={(e) => {
            e.preventDefault();
            getMovies(document.querySelector(".input"));
            setInput(document.querySelector(".input"));
          }}
        >
          Search
        </button>
      </div>
      <section className="box">
        <div className="movie-list">
          <h1>Movie List</h1>
          <h2>Results for {input?.value}</h2>
          {movieArr?.map((movie, index) => {
            return (
              <ul>
                <li className={movie.imdbID} key={movie.imdbID}>
                  {movie.Title}({movie.Year})
                  <button key={index}>Nominate</button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="nominee-list">
          <h1>Your Nominees</h1>
          <ul className="nominees"></ul>
        </div>
      </section>
    </>
  );
};

export default GetMovies;
