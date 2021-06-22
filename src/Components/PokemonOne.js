import React from 'react'
import AnimatedNumber from 'react-animated-number';

export default function PokemonOne({ pokemonOne, pokemonOneStat, buttonOneClick }) {
    return (
        <button className="Pokemon_One_Button" onClick={buttonOneClick}>
            <div className="PokemonOne">
                <div className="Card_Name">
                    {pokemonOne.name}
                </div>
                <div className="PokemonOne_Info">
                    <div className="Card_Image">
                        <img src={pokemonOne.sprite} alt="" width="400px"/>
                    </div>
                    
                </div>
            </div>
        </button>
    )
}