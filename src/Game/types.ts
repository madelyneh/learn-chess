export interface ISquareOptions {
    row: string;
    column: number; 
    piece?: Piece;
    light?: boolean;
}

export interface IPieceType<T> {
    [key: string]: T,
};

export enum Piece {
    king= "K",
    queen= "Q",
    biship= "B",
    rook= "R",
    knight= "N",
    pawn= "p",
    kingd= "*K",
    queend= "*Q",
    bishipd= "*B",
    rookd= "*R",
    knightd= "*N",
    pawnd= "*p",
    none= "-",
};