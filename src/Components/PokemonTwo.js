import React from 'react';
import './PokemonTwo.css';

export default function PokemonTwo({ pokemonTwo, pokemonTwoStat, showStatTwo, buttonTwoClick }) {
    return (
        <button className="Pokemon_Two_Button" onClick={buttonTwoClick}>
            <div className="PokemonTwo">
                <div className="Card_Name">
                    {pokemonTwo.name}
                </div>
                <div className="PokemonTwo_Info">
                    <div className="Card_Image">
                        <img src={pokemonTwo.sprite} alt="" className="pokeTwoSprite"/>
                    </div>
                </div>
                <div className="Stat_Placeholder">
                    {"?"}
                </div>
            </div>
        </button>
    )
}