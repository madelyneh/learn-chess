import {ISquareOptions, Piece} from '../types';

export interface IBoardConfig {
    layout: IRowConfig[];
}

export interface IRowConfig {
    rowClass: string,
    squares: ISquareOptions[]
}

export interface IMoves {
    [key: number]: {
        1: string,
        2?: string,
    }
}

export let defaultStartingPositions = (): IBoardConfig => {
    return {
        layout: [
            {
                rowClass: "board-row one",
                squares: [
                    {row: "a", column: 1,light: false, piece: Piece.rookd},
                    {row: "b", column: 1, light: true, piece: Piece.knightd},
                    {row: "c", column: 1,light:false, piece: Piece.bishipd},
                    {row: "d", column: 1, light: true, piece: Piece.queend},
                    {row: "e", column: 1,light:false, piece: Piece.kingd},
                    {row: "f", column: 1, light: true, piece: Piece.bishipd},
                    {row: "g", column: 1,light:false, piece: Piece.knightd},
                    {row: "h", column: 1, light:true, piece: Piece.rookd}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row two",
                squares: [
                    {row: "a", column: 2,light: true, piece: Piece.pawnd},
                    {row: "b", column: 2, light: false, piece: Piece.pawnd},
                    {row: "c", column: 2,light: true, piece: Piece.pawnd},
                    {row: "d", column: 2, light: false, piece: Piece.pawnd},
                    {row: "e", column: 2,light: true, piece: Piece.pawnd},
                    {row: "f", column: 2, light: false, piece: Piece.pawnd},
                    {row: "g", column: 2,light: true, piece: Piece.pawnd},
                    {row: "h", column: 2, light: false, piece: Piece.pawnd}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row three",
                squares: [
                    {row: "a", column: 3,light: false, piece: Piece.none},
                    {row: "b", column: 3, light: true, piece: Piece.none},
                    {row: "c", column: 3,light:false, piece: Piece.none},
                    {row: "d", column: 3, light: true, piece: Piece.none},
                    {row: "e", column: 3,light:false, piece: Piece.none},
                    {row: "f", column: 3, light: true, piece: Piece.none},
                    {row: "g", column: 3,light:false, piece: Piece.none},
                    {row: "h", column: 3, light:true, piece: Piece.none}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row four",
                squares: [
                    {row: "a", column: 4, light: true, piece: Piece.none},
                    {row: "b", column: 4, light: false, piece: Piece.none},
                    {row: "c", column: 4, light: true, piece: Piece.none},
                    {row: "d", column: 4, light: false, piece: Piece.none},
                    {row: "e", column: 4, light: true, piece: Piece.none},
                    {row: "f", column: 4, light: false, piece: Piece.none},
                    {row: "g", column: 4, light: true, piece: Piece.none},
                    {row: "h", column: 4, light: false, piece: Piece.none}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row five",
                squares: [
                    {row: "a", column: 5, light: false, piece: Piece.none},
                    {row: "b", column: 5, light: true, piece: Piece.none},
                    {row: "c", column: 5, light:false, piece: Piece.none},
                    {row: "d", column: 5, light: true, piece: Piece.none},
                    {row: "e", column: 5, light:false, piece: Piece.none},
                    {row: "f", column: 5, light: true, piece: Piece.none},
                    {row: "g", column: 5, light:false, piece: Piece.none},
                    {row: "h", column: 5, light:true, piece: Piece.none}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row six",
                squares: [
                    {row: "a", column: 6, light: true, piece: Piece.none},
                    {row: "b", column: 6, light: false, piece: Piece.none},
                    {row: "c", column: 6, light: true, piece: Piece.none},
                    {row: "d", column: 6, light: false, piece: Piece.none},
                    {row: "e", column: 6, light: true, piece: Piece.none},
                    {row: "f", column: 6, light: false, piece: Piece.none},
                    {row: "g", column: 6, light: true, piece: Piece.none},
                    {row: "h", column: 6, light: false, piece: Piece.none}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row seven",
                squares: [
                    {row: "a", column: 7, light: false, piece: Piece.pawn},
                    {row: "b", column: 7, light: true, piece: Piece.pawn},
                    {row: "c", column: 7, light:false, piece: Piece.pawn},
                    {row: "d", column: 7, light: true, piece: Piece.pawn},
                    {row: "e", column: 7, light:false, piece: Piece.pawn},
                    {row: "f", column: 7, light: true, piece: Piece.pawn},
                    {row: "g", column: 7, light:false, piece: Piece.pawn},
                    {row: "h", column: 7, light:true, piece: Piece.pawn}
                ] as ISquareOptions[]
            },
            {
                rowClass: "board-row eight",
                squares: [
                    {row: "a", column: 8, light: true, piece: Piece.rook},
                    {row: "b", column: 8, light: false, piece: Piece.knight},
                    {row: "c", column: 8, light: true, piece: Piece.biship},
                    {row: "d", column: 8, light: false, piece: Piece.queen},
                    {row: "e", column: 8, light: true, piece: Piece.king},
                    {row: "f", column: 8, light: false, piece: Piece.biship},
                    {row: "g", column: 8, light: true, piece: Piece.knight},
                    {row: "h", column: 8, light: false, piece: Piece.rook}
                ] as ISquareOptions[]
            },
        ],
    }
}