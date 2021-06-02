import React from 'react';
import './rook.css';
import light from './rook.png';
import dark from './rookb.png';
import {onClick} from '../../Game/click';

const Rook = (props: any) => {

    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={dark} 
                    className="rook" 
                    alt="rook" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={light} 
                    className="rook"
                    alt="rook" />
            </div>
        );
    }
} 

export default Rook;