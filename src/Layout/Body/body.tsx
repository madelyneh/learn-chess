import './body.css';
import * as G from "../../Game/index";
// import Pawn from "../../Pieces/pawn/pawn";
// import King from "../../Pieces/king/king";
// import Queen from "../../Pieces/queen/queen";
// import Biship from "../../Pieces/biship/biship";
// import Rook from "../../Pieces/rook/rook";
// import Knight from "../../Pieces/knight/knight";

const Body = (props: any) => {
    return (
      <body className="body">
        <G.Board/>
          {/* <div>Hello World</div>
          <div>{props.currentPlayer}</div> */}
          {/* <Pawn currentPlayer={props.currentPlayer} />
          <King currentPlayer={props.currentPlayer}/>
          <Queen currentPlayer={props.currentPlayer}/>
          <Biship currentPlayer={props.currentPlayer}/>
          <Rook currentPlayer={props.currentPlayer}/>
          <Knight currentPlayer={props.currentPlayer}/> */}
      </body>
    );
  }

  Body.defaultProps = {
    currentPlayer: "first"
  }
  
  export default Body;
  