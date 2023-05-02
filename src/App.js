// import logo from './logo.svg';
import "./App.css";
import FilmBox from "./containers/FilmBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Movies
        </a>
        <FilmBox />
      </header>
    </div>
  );
}

export default App;