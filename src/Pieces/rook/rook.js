import React from 'react';
import './rook.css';
import light from './rook.png';
import dark from './rookb.png';

function Rook(player) {
    if (player === "second") {
        return (
            <div className="p-rook">
                <img src={dark} className="rook-dark" alt="rook" />
            </div>
        );
    } else {
        return (
            <div className="p-rook">
                <img src={light} className="rook-light" alt="rook" />

            </div>
        );
    }
} 

export default Rook;