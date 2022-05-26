import React from 'react';
import './App.css';
import {Appcontext} from "./context/Appprovider"
import {GithubCard} from "./Github-usereducer/Github"


function App() {
  const [theme,toggletheme] = React.useContext(Appcontext)
  return (
    <div className="App">
      <div style={{backgroundColor:theme?"yellow":"teal",width:"100px",height:"100px"}}>
        hello World
      </div>
      <button onClick={toggletheme}>
        Toggle Theme
      </button>
      <GithubCard/>
    </div>
  );
}

export default App;
