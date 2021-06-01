import React from 'react';
import './king.css';
import light from './king.png';
import dark from './kingb.png';

function King(player) {
    if (player === "second") {
        return (
            <div className="p-king">
                <img src={dark} className="king-dark" alt="king" />
            </div>
        );
    } else {
        return (
            <div className="p-king">
                <img src={light} className="king-light" alt="king" />

            </div>
        );
    }
} 

export default King;