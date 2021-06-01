import './body.css';
import * as p from '../../Pieces/index';

function Body() {
  let user1 = "first";
  let user2 = "second";

  let currentUser = user1;

    return (
      <div className="body">
        <div className="body-content">
          <div>Hello World</div>
          <p.Pawn value={currentUser}></p.Pawn>
          <p.Knight></p.Knight>
          <p.Biship></p.Biship>
          <p.Queen></p.Queen>
          <p.Rook></p.Rook>
          <p.King></p.King>
        </div>
      </div>
    );
  }
  
  export default Body;
  