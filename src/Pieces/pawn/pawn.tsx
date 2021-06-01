import React from 'react';
import './pawn.css';
import light from './pawn.png';
import dark from './pawnb.png';

const Pawn = (props: any) => {
    let random = Math.floor(Math.random() * 10);
    console.log("📕📙📒📗📘 pawn: 8# -> random:", random, props);

    if (props.user === "second") {
        return (
            <div className="p-pawn">
                <img src={dark} className="pawn" alt="pawn" />
            </div>
        );
    } else {
        return (
            <div className="p-pawn">
                <img src={light} className="pawn" alt="pawn" />
            </div>
        );
    }
}
export default Pawn;