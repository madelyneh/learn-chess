import React from 'react';
import './biship.css';
import light from './biship.png';
import dark from './bishipb.png';

function Biship(player) {
    if (player === "second") {
        return (
            <div className="p-biship">
                <img src={dark} className="biship-dark" alt="biship" />
            </div>
        );
    } else {
        return (
            <div className="p-biship">
                <img src={light} className="biship-light" alt="biship" />

            </div>
        );
    }
} 

export default Biship;