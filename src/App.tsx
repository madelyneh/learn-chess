import React from 'react';
import * as layout from "./Layout/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <layout.Header currentPlayer='First'/>
      </div>
      <div className="App-body">
        <layout.Body currentPlayer='First'/>
      </div>
    </div>
  );
}

export default App;
