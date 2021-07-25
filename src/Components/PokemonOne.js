import React from 'react';
import './PokemonOne.css';

export default function PokemonOne({ pokemonOne, pokemonOneStat, showStatOne, buttonOneClick }) {
    return (
        <button className="Pokemon_One_Button" onClick={buttonOneClick}>
            <div className="PokemonOne">
                <div className="Card_Name">
                    {pokemonOne.name}
                </div>
                <div className="PokemonOne_Info">
                    <div className="Card_Image">
                        <img src={pokemonOne.sprite} alt="" className="pokeOneSprite"/>
                    </div>
                </div>
                <div className="Stat_Placeholder">
                    {"?"}
                </div>
            </div>
        </button>
    )
}