import logo from './logo.svg';
import './App.css';
import { Tictactoe } from './tictactoe/Tictactoe';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor: 'teal'}}>TIC-TAC-TOE</h1>
      <Tictactoe/>
    </div>
  );
}

export default App;
