import React from 'react';
import "./board.css";
import Pawn from "../../Pieces/pawn/pawn";
import King from "../../Pieces/king/king";
import Queen from "../../Pieces/queen/queen";
import Biship from "../../Pieces/biship/biship";
import Rook from "../../Pieces/rook/rook";
import Knight from "../../Pieces/knight/knight";

let p = {
    king: "King",
    queen: "Queen",
    biship: "Biship",
    rook: "Rook",
    knight: "Knight",
    pawn: "Pawn",
    none: null,
};

export interface squareOptions {
    row: string;
    column: number; 
    piece?: string;
    light?: boolean;
}

const Square = (props: any) => {
    let colum = (props.row === "a") ? props.column: "";
    let row = (props.column === 1) ? props.row : "";
    let classStyle = (props.light ===false) ? "square" : "square dark";
    let piece = props.piece;

        return (
            <div className={classStyle}>
            <div className="square-text column">{colum}</div>
            <div className="square-text row">{row}</div>
            {piece === p.king && <King currentPlayer={props.currentPlayer} />}
            {piece === p.queen && <Queen currentPlayer={props.currentPlayer} />}
            {piece === p.rook && <Rook currentPlayer={props.currentPlayer} />}
            {piece === p.biship && <Biship currentPlayer={props.currentPlayer} />}
            {piece ===  p.knight && <Knight currentPlayer={props.currentPlayer} />}
            {piece === p.pawn && <Pawn currentPlayer={props.currentPlayer} />}

            </div>
        );
}

class Board extends React.Component {
    renderSquare(config: squareOptions) {
        return ( <Square row={config.row} column={config.column} piece={config.piece || p.none} light={config.light}></Square>);
    }

    render() {
        const status = 'Next player: X';

        return (
            <div className="game">
                {/* <div className="status">{status}</div> */}
                <div className="game-board">
                    <div className="board-row eight">
                        {this.renderSquare({row: "a",column: 8})}
                        {this.renderSquare({row: "b",column: 8,light:false})}
                        {this.renderSquare({row: "c",column: 8})}
                        {this.renderSquare({row: "d",column: 8,light:false})}
                        {this.renderSquare({row: "e",column: 8})}
                        {this.renderSquare({row: "f",column: 8,light:false})}
                        {this.renderSquare({row: "g",column: 8})}
                        {this.renderSquare({row: "h",column: 8,light:false})}
                    </div>
                    <div className="board-row seven">
                        {this.renderSquare({row: "a", column: 7,light:false})}
                        {this.renderSquare({row: "b", column: 7})}
                        {this.renderSquare({row: "c", column: 7,light:false})}
                        {this.renderSquare({row: "d", column: 7})}
                        {this.renderSquare({row: "e", column: 7,light:false})}
                        {this.renderSquare({row: "f", column: 7})}
                        {this.renderSquare({row: "g", column: 7,light:false})}
                        {this.renderSquare({row: "h", column: 7})}
                    </div>
                    <div className="board-row six">
                        {this.renderSquare({row: "a",column: 6})}
                        {this.renderSquare({row: "b",column: 6,light:false})}
                        {this.renderSquare({row: "c",column: 6})}
                        {this.renderSquare({row: "d",column: 6,light:false})}
                        {this.renderSquare({row: "e",column: 6})}
                        {this.renderSquare({row: "f",column: 6,light:false})}
                        {this.renderSquare({row: "g",column: 6})}
                        {this.renderSquare({row: "h",column: 6,light:false})}
                    </div>
                    <div className="board-row five">
                        {this.renderSquare({row: "a", column: 5,light:false})}
                        {this.renderSquare({row: "b", column: 5})}
                        {this.renderSquare({row: "c", column: 5,light:false})}
                        {this.renderSquare({row: "d", column: 5})}
                        {this.renderSquare({row: "e", column: 5,light:false})}
                        {this.renderSquare({row: "f", column: 5})}
                        {this.renderSquare({row: "g", column: 5,light:false})}
                        {this.renderSquare({row: "h", column: 5})}
                    </div>
                    <div className="board-row four">
                        {this.renderSquare({row: "a",column: 4})}
                        {this.renderSquare({row: "b",column: 4,light:false})}
                        {this.renderSquare({row: "c",column: 4})}
                        {this.renderSquare({row: "d",column: 4,light:false})}
                        {this.renderSquare({row: "e",column: 4})}
                        {this.renderSquare({row: "f",column: 4,light:false})}
                        {this.renderSquare({row: "g",column: 4})}
                        {this.renderSquare({row: "h",column: 4,light:false})}
                    </div>
                    <div className="board-row three">
                        {this.renderSquare({row: "a", column: 3,light:false})}
                        {this.renderSquare({row: "b", column: 3})}
                        {this.renderSquare({row: "c", column: 3,light:false})}
                        {this.renderSquare({row: "d", column: 3})}
                        {this.renderSquare({row: "e", column: 3,light:false})}
                        {this.renderSquare({row: "f", column: 3})}
                        {this.renderSquare({row: "g", column: 3,light:false})}
                        {this.renderSquare({row: "h", column: 3})}
                    </div>
                    <div className="board-row two">
                        {this.renderSquare({row: "a",column: 2, piece:p.pawn})}
                        {this.renderSquare({row: "b",column: 2, piece:p.pawn, light:false})}
                        {this.renderSquare({row: "c",column: 2, piece:p.pawn})}
                        {this.renderSquare({row: "d",column: 2, piece:p.pawn, light:false})}
                        {this.renderSquare({row: "e",column: 2, piece:p.pawn})}
                        {this.renderSquare({row: "f",column: 2, piece:p.pawn, light:false})}
                        {this.renderSquare({row: "g",column: 2, piece:p.pawn})}
                        {this.renderSquare({row: "h",column: 2, piece:p.pawn, light:false})}
                    </div>
                    <div className="board-row one">
                        {this.renderSquare({row: "a", column: 1,light:false, piece:p.rook})}
                        {this.renderSquare({row: "b", column: 1, piece:p.knight})}
                        {this.renderSquare({row: "c", column: 1,light:false, piece:p.biship})}
                        {this.renderSquare({row: "d", column: 1, piece:p.queen})}
                        {this.renderSquare({row: "e", column: 1,light:false, piece:p.king})}
                        {this.renderSquare({row: "f", column: 1, piece:p.biship})}
                        {this.renderSquare({row: "g", column: 1,light:false, piece:p.knight})}
                        {this.renderSquare({row: "h", column: 1, piece:p.rook})}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
