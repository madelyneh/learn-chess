import React from 'react';
import './knight.css';
import light from './knight.png';
import dark from './knightb.png';

function Knight() {
    let random = Math.floor(Math.random() * 10);

    if (random >= 4) {
        return (
            <div className="p-knight">
                <img src={dark} className="knight-dark" alt="knight" />
            </div>
        );
    } else {
        return (
            <div className="p-knight">
                <img src={light} className="knight-light" alt="knight" />

            </div>
        );
    }
} 

export default Knight;