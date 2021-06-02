import React from 'react';
import './pawn.css';
import light from './pawn.png';
import dark from './pawnb.png';
import {onClick} from '../../Game/click';

const Pawn = (props: any) => {
    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={dark} 
                    className="pawn" 
                    alt="pawn" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={light} 
                    className="pawn" 
                    alt="pawn" />
            </div>
        );
    }
}
export default Pawn;