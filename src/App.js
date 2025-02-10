import './App.css';
import Header from './Header.js';

function App() {
  function Namechange(){
    const names = ["broke", "fake brokey", "very money", "somewhat money"];
    const random = Math.floor(Math.random() * names.length);
    return names[random];
  }
  return (
    // <div className="App">
    <div>
      <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <p>im {Namechange()}</p>
      <Header/>
    </div>
  );
}

export default App;
