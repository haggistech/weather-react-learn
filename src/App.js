import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo />
        <h1>Miks Weather App</h1>

      </header>
      <main>
      <Forecast />
      </main>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
