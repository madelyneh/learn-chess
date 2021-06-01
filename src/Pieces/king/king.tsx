import React from 'react';
import './king.css';
import light from './king.png';
import dark from './kingb.png';

function King() {
    let random = Math.floor(Math.random() * 10);

    if (random >= 4) {
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