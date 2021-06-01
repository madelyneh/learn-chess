import './header.css';

function Header() {
    return (
      <div className="header">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://www.chess.com/lessons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chess
          </a>
          <div className="welcome">Welcome! Are you excited to learn about chess??</div>
        </header>
      </div>
    );
  }
  
  export default Header;
  