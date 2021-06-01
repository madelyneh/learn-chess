import React from 'react';
import './queen.css';
import light from './queen.png';
import dark from './queenb.png';

function Queen() {
    let random = Math.floor(Math.random() * 10);

    if (random >= 4) {
        return (
            <div className="p-queen">
                <img src={dark} className="queen-dark" alt="queen" />
            </div>
        );
    } else {
        return (
            <div className="p-queen">
                <img src={light} className="queen-light" alt="queen" />

            </div>
        );
    }
} 

export default Queen;