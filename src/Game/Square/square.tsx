import React from 'react';
import "./square.css";
import Pawn from "../../Pieces/pawn/pawn";
import King from "../../Pieces/king/king";
import Queen from "../../Pieces/queen/queen";
import Biship from "../../Pieces/biship/biship";
import Rook from "../../Pieces/rook/rook";
import Knight from "../../Pieces/knight/knight";
import { Piece, ISquareOptions } from "../types";

export const Square = (props: ISquareOptions) => {
    let row = (props.row === "a") ? props.column: undefined;
    let column = (props.column ===8) ? props.row : undefined;
    let piece = props.piece;
    let squareId = piece+props.row+props.column;

    let squareClass = (props.light ===false) ? "square "+ squareId : "square dark "+ squareId;

        return (
            <div key={squareId} className={squareClass} onClick={(event) => {squareClicked(event, squareId)}}>
                {row && <div className="square-text row">{row}</div>}
                {column && <div className="square-text column">{column}</div>}
                {piece === Piece.king && 
                    <King key={squareId} currentPlayer="first"/>}
                {piece === Piece.queen && 
                    <Queen key={squareId} currentPlayer="first"/>}
                {piece === Piece.rook && 
                    <Rook key={squareId} currentPlayer="first"/>}
                {piece === Piece.biship && 
                    <Biship key={squareId} currentPlayer="first"/>}
                {piece === Piece.knight && 
                    <Knight key={squareId} currentPlayer="first"/>}
                {piece === Piece.pawn && 
                    <Pawn key={squareId} currentPlayer="first"/>}
                {piece === Piece.kingd && 
                    <King key={squareId} currentPlayer="second"/>}
                {piece === Piece.queend && 
                    <Queen key={squareId} currentPlayer="second" />}
                {piece === Piece.rookd && 
                    <Rook key={squareId} currentPlayer="second"/>}
                {piece === Piece.bishipd && 
                    <Biship key={squareId} currentPlayer="second" />}
                {piece ===  Piece.knightd && 
                    <Knight key={squareId} currentPlayer="second" />}
                {piece === Piece.pawnd && 
                    <Pawn key={squareId} currentPlayer="second"/>}
            </div>
        );
}

const squareClicked = (event: any, item: string) => {
    console.log("📙 square: 40# -> item:", item);
    console.log("📘 square: 40# -> event:", event);

}
