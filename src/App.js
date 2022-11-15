import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{ height: 100 }} src={logo} className="App-logo" alt="logo" />
        <Login/>
      </header>
    </div>
  );
}

export default App;
