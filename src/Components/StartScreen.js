import React from 'react';
import './StartScreen.css';

export default function StartScreen({ highScore }) {
    return (
        <div className="StartScreen">
            <h3>Let's see how well you know Pokémon stats...</h3>
            <h3>Click Start to begin...</h3>
            <button className="StartButton">Start</button>
            <h4>Current High Score: {highScore}</h4>
        </div>
    )
}