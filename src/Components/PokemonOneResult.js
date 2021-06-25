import React from 'react';
import './PokemonOneResult.css';
import AnimatedNumber from 'react-animated-number';

export default function PokemonOneResult({ pokemonOne, pokemonOneStat, buttonOneClick }) {
    return (
            <div className="PokemonOne">
                <div className="Card_Name">
                    {pokemonOne.name}
                </div>
                <div className="PokemonOne_Info">
                    <div className="Card_Image">
                        <img src={pokemonOne.sprite} alt="" width="400px"/>
                    </div>
                    <AnimatedNumber className="PokemonOne_Stat" 
                                    value={pokemonOneStat}
                                    formatValue={n => n.toFixed(0)} />
                </div>
            </div>
    )
}