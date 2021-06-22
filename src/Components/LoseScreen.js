import React from 'react';
import './LoseScreen.css';

export default function LoseScreen({ prevScore, highScore, onStartClick, onHomeClick }) {
    return (
        <div className="LoseScreen">
            <h3>Your score is:</h3>
            <h2>{prevScore}</h2>
            <h3>{prevScore > highScore ? "Congratulations! \n You beat your High Score!" : "Unfortunate, better luck next time."}</h3>
            <div className="Menu">
                <h3>Click Start to begin or Home to return Home...</h3>
                <div className="Buttons">
                    <button className="StartButton" onClick={onStartClick}>Start</button>
                    <button className="HomeButton" onClick={onHomeClick}>Home</button>
                </div>
            </div>
            <h4>Current High Score: {highScore}</h4>
        </div>
    )
}