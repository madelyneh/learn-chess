import React from 'react';
import './king.css';
import light from './king.png';
import dark from './kingb.png';
import {onClick} from '../../Game/click';

const King = (props: any) => {

    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)}
                    src={dark} 
                    className="king" 
                    alt="king" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={light} 
                    className="king" 
                    alt="king" />

            </div>
        );
    }
} 

export default King;