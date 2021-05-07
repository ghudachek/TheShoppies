import "./App.css";
import GetMovies from "./MovieList/GetMovies";
import Popcorn from "./photos/popcorn-big.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Popcorn} alt="popcorn" className="popcorn" />
        <h1 id="shoppies">The Shoppies</h1>
      </header>
      <GetMovies />
    </div>
  );
}

export default App;
