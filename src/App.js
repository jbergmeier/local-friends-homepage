import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='subtext'>
          coming soon...
        </p>
        <p className='email'>
          <a href="mailto:hello@local-friends-hamm.de?subject=Hello">hello@local-friends-hamm.de</a>
        </p>
      </header>
    </div>
  );
}

export default App;
