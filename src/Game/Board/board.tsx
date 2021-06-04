import React from 'react';
import "./board.css";
import { Piece, ISquareOptions } from "../types";
import { defaultStartingPositions, IBoardConfig, IMoves } from "./board-config";
import { Square } from "../Square/square";
import { Subject } from "rxjs";

class Board extends React.Component {
    public defaultLayout: IBoardConfig;
    public moves: IMoves[] = [];
    public messageBus = new Subject();
    renderSquare(config: ISquareOptions) {
        return ( <Square row={config.row} column={config.column} piece={config.piece || Piece.none} light={config.light}></Square>);
    }

    render() {

        return (
            <div className="game">
                <div className="game-board">
                    {this.getBoardLayout()}
                </div>
            </div>
        );
    }

    getBoardLayout() {
        let rows = [];
        if (!this.defaultLayout && !this.moves[0]) {
            console.log("Here");
            this.defaultLayout = defaultStartingPositions();
        }

        this.defaultLayout.layout.forEach((row) => {

            let squares = [];
            row.squares.forEach((square: ISquareOptions) => {
                let value = this.renderSquare(square);
                squares.push(value);
            });
            rows.push(
                <div className={row.rowClass}>
                    {squares}
                </div>
            );
        });
        return rows;
    }
}

export default Board;
