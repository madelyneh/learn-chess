import React from 'react';
import './biship.css';
import light from './biship.png';
import dark from './bishipb.png';
import {onClick} from '../../Game/click';

const Biship = (props: any) => {

    if (props.currentPlayer === "second") {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)} 
                    src={dark} 
                    className="biship" 
                    alt="biship" />
            </div>
        );
    } else {
        return (
            <div className="piece">
                <img onClick={(event) => onClick(event)}
                    src={light} 
                    className="biship" 
                    alt="biship" />

            </div>
        );
    }
} 

export default Biship;