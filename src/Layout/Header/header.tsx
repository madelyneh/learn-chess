import './header.css';
import logo from '../../logo.png';

const Header = (props: any) => {
    return (
      <header className="header">
        <a
          className="App-link"
          href="https://www.chess.com/lessons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Pawn" />
        </a>
        <div className="welcome">{props.currentPlayer} Player's turn</div>
      </header>
    );
  }
  
  export default Header;
  