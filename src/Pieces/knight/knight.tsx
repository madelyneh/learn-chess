import React from 'react';
import './knight.css';
import light from './knight.png';
import dark from './knightb.png';
import {onClick} from '../../Game/click';

const Knight = (props: any) => {

    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={dark} 
                    className="knight" 
                    alt="knight" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={light} 
                    className="knight" 
                    alt="knight" />
            </div>
        );
    }
} 

export default Knight;