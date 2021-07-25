import React from 'react';
import './StartScreen.css';

export default function StartScreen({ highScore, onStartClick }) {
    return (
        <div className="StartScreen">
            <h3>Let's see how well you know Pokémon stats...</h3>
            <h2>Click Start to begin...</h2>
            <button className="StartButton" onClick={onStartClick}>Start</button>
            <h4>Current High Score: {highScore}</h4>
        </div>
    )
}