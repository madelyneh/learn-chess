import React from 'react';
import './queen.css';
import light from './queen.png';
import dark from './queenb.png';
import {onClick} from '../../Game/click';
// making a change to see how it works with the online version of VSCode

const Queen = (props: any) => {

    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={dark} 
                    className="queen" 
                    alt="queen" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={light} 
                    className="queen" 
                    alt="queen" />
            </div>
        );
    }
} 

export default Queen;