import React from 'react';
import './pawn.css';
import light from './pawn.png';
import dark from './pawnb.png';

class Pawn extends React.Component {
    render() {
        let random = Math.floor(Math.random() * 10);
        console.log("📕📙📒📗📘 pawn: 8# -> random:", random, this.props.value);
        
        if (this.props.value = "second") {
            return (
                <div className="p-pawn">
                    <img src={dark} className="pawn" alt="pawn" />
                </div>
            );
        } else {
            return (
                <div className="p-pawn">
                    <img src={light} className="pawn" alt="pawn" />
                    {this.props.value}
                </div>
            );
        }
    }
} 

export default Pawn;