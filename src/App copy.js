import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Ball Ballerson"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to<code> Full Stack Course</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          gooba gooba gooba
        </a>
        <p>{name}</p>
        <p>{"straight balling"}</p>
        <p>{"number"}</p>
        <p>{[1,2,3,4,5,5,6,7,8,]}</p>
      </header>
    </div>
  );
}

export default App;
