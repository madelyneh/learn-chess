// import logo from './logo.svg';
import './App.css';
import * as layout from "./Layout/index";
// import { Header } from './Layout/index';

function App() {
  return (
    <div className="App">
      <header>
        <layout.Header></layout.Header>
      </header>
      <body>
        <layout.Body></layout.Body>
      </body>
    </div>
  );
}

export default App;
