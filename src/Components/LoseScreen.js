import React from 'react';
import './LoseScreen.css';

export default function LoseScreen({ score, highScore, onStartClick }) {
    return (
        <div className="LoseScreen">
            {<h3>Unfortunate</h3>}
            <h3>Click Start to begin...</h3>
            <button className="StartButton" onClick={onStartClick}>Start</button>
            <h4>Current High Score: {highScore}</h4>
        </div>
    )
}