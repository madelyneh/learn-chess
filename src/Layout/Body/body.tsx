import './body.css';
import Pawn from "../../Pieces/pawn/pawn";

const Body = (props: any) => {
    return (
      <body className="body">
          <div>Hello World</div>
          <div>{props.currentPlayer}</div>
          <Pawn user={props.currentPlayer} />
          {/* <p.Knight></p.Knight>
          <p.Biship></p.Biship>
          <p.Queen></p.Queen>
          <p.Rook></p.Rook>
          <p.King></p.King> */}
      </body>
    );
  }

  Body.defaultProps = {
    currentPlayer: "First"
  }
  
  export default Body;
  