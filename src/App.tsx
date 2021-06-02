import React from 'react';
import * as layout from "./Layout/index";
// import * as G from "./Game/index";
import './App.css';

function App() {
  const currentPlayer = "second";
  return (
    <div className="App">
      <div className="App-header">
        <layout.Header currentPlayer={currentPlayer}/>
      </div>
      <div className="App-body">
        <layout.Body currentPlayer={currentPlayer}/>
        {/* <G.Board/> */}
      </div>
    </div>
  );
}

export default App;
